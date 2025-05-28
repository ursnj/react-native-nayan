import React, { type ReactNode, useEffect, useState } from 'react';
import { Linking, Platform, Text, type TextProps, type TextStyle, View, type ViewProps } from 'react-native';
// @ts-ignore
import linkifyIt from 'linkify-it';
// @ts-ignore
import mdurl from 'mdurl';
import { NText } from '@/components/NText';
import { useNTheme } from '@/hooks/useNTheme';

const defaultLinkify = linkifyIt();
const { OS } = Platform;

type LinkifyProps = ViewProps & {
  children: ReactNode;
  style?: TextStyle;
  linkify?: any;
  linkStyle?: TextStyle;
  linkText?: string | ((url: string) => string);
  onPress?: (url: string, text: string) => void;
  onLongPress?: (url: string, text: string) => void;
  injectViewProps?: (url: string) => object;
};

const Linkify = (props: LinkifyProps) => {
  const { colors } = useNTheme();
  const {
    children,
    style,
    linkify: customLinkify,
    linkStyle = { color: colors.primary },
    linkText,
    onPress,
    onLongPress,
    injectViewProps = () => ({}),
    ...viewProps
  } = props;

  const [linkifyInstance, setLinkifyInstance] = useState(() => customLinkify || defaultLinkify);

  useEffect(() => {
    if (customLinkify && customLinkify !== linkifyInstance) {
      setLinkifyInstance(customLinkify);
    }
  }, [customLinkify]);

  if (!linkifyInstance) {
    console.error('Linkify instance is undefined.');
    return (
      <View {...viewProps} style={style}>
        {children}
      </View>
    );
  }

  const isTextNested = (component: React.ReactElement) => {
    if (!React.isValidElement(component)) throw new Error('Invalid component');
    // @ts-ignore
    return typeof component.props.children !== 'string';
  };

  const processLinkify = (component: React.ReactElement<TextProps>) => {
    const textContent = component.props.children as string;
    if (!textContent || typeof textContent !== 'string') return component;

    if (!linkifyInstance.pretest(textContent) || !linkifyInstance.test(textContent)) {
      return component;
    }

    let elements: ReactNode[] = [];
    let lastIndex = 0;

    try {
      linkifyInstance
        .tlds('app', true)
        .match(textContent)
        ?.forEach(({ index, lastIndex: endIndex, text, url }: any) => {
          const nonLinkedText = textContent.substring(lastIndex, index);
          if (nonLinkedText) elements.push(nonLinkedText);
          lastIndex = endIndex;

          const displayText = typeof linkText === 'function' ? linkText(url) : linkText || text;
          const clickHandlers = {
            onPress: onPress ? () => onPress(url, displayText) : undefined,
            onLongPress: OS !== 'web' && onLongPress ? () => onLongPress(url, displayText) : undefined
          };

          elements.push(
            <NText key={url + index} style={[component.props.style, linkStyle]} {...clickHandlers} {...injectViewProps(url)}>
              {displayText}
            </NText>
          );
        });

      elements.push(textContent.substring(lastIndex));
      return React.cloneElement(component, {}, elements);
    } catch (err) {
      console.error('Error in processLinkify:', err);
      return component;
    }
  };

  const parseComponent = (component: React.ReactElement): React.ReactElement => {
    if (!component?.props?.children) return component;
    return React.cloneElement(
      component,
      {},
      React.Children.map(component.props.children, child => {
        if (typeof child === 'string' && linkifyInstance?.pretest?.(child)) {
          return processLinkify(<NText style={component.props.style}>{child}</NText>);
        }
        if (React.isValidElement(child) && child.type === Text && !isTextNested(child)) {
          return processLinkify(child as any);
        }
        return parseComponent(child as React.ReactElement);
      })
    );
  };

  return (
    <View {...viewProps} style={style}>
      {!onPress && !onLongPress && !linkStyle ? children : parseComponent(<NText>{children}</NText>).props.children}
    </View>
  );
};

type NLinkifyProps = LinkifyProps & { linkDefault?: boolean };

export const NLinkify: React.FC<NLinkifyProps> = ({ linkDefault, ...props }) => {
  const handleLink = (url: string) => {
    const urlObject = mdurl.parse(url);
    urlObject.protocol = urlObject.protocol.toLowerCase();
    const normalizedURL = mdurl.format(urlObject);

    Linking.canOpenURL(normalizedURL).then(supported => supported && Linking.openURL(normalizedURL));
  };

  return <Linkify {...props} onPress={!linkDefault ? handleLink : props.onPress} />;
};
