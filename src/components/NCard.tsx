import { View, type ViewProps } from 'react-native';
import { cn } from '@/lib/utils';

export const NCard = (props: ViewProps) => {
  return <View className={cn('bg-card border border-border rounded', props.className)}>{props.children}</View>;
};
