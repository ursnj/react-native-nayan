import { Pressable, type PressableProps } from 'react-native';
import { cn } from '@/lib/utils';

export const NPress = (props: PressableProps) => {
  const { children, className = '', ...remaining } = props;
  return (
    <Pressable className={cn('active:opacity-80', className)} {...remaining}>
      {children}
    </Pressable>
  );
};
