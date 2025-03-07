import { StyleProp, ViewStyle } from 'react-native';
import { DefaultKeyboardToolbarTheme, KeyboardAwareScrollView, KeyboardToolbar, KeyboardToolbarProps } from 'react-native-keyboard-controller';
import { useColorScheme } from '@/hooks/useColorScheme';

interface Props {
  children: any;
  className?: string;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
}

export const NKeyboardScrollView = (props: Props) => {
  const { colors } = useColorScheme();
  const { children, style = {}, contentStyle = {}, className = '' } = props;

  const theme: KeyboardToolbarProps['theme'] = {
    ...DefaultKeyboardToolbarTheme,
    dark: {
      ...DefaultKeyboardToolbarTheme.dark,
      primary: colors.primary
    }
  };

  return (
    <>
      <KeyboardAwareScrollView
        className={className}
        bottomOffset={62}
        extraKeyboardSpace={62}
        contentContainerStyle={contentStyle}
        style={[{ flex: 1 }, style]}>
        {children}
      </KeyboardAwareScrollView>
      <KeyboardToolbar theme={theme} />
    </>
  );
};
