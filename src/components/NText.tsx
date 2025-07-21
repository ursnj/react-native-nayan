import { Text, type TextProps } from 'react-native';
import { cn } from '@/lib/utils';

interface Props extends TextProps {
  className?: string;
  children: string | React.ReactNode;
}

export const NText = (props: Props) => {
  const { children, className, ...rest } = props;
  return (
    <Text className={cn('text-text text-base leading-relaxed', className)} {...rest}>
      {children}
    </Text>
  );
};
