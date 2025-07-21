import { ActivityIndicator, View } from 'react-native';
import { cn } from '@/lib/utils';
import { useNTheme } from '@/hooks/useNTheme';

interface Props {
  color?: string;
  className?: string;
  size?: number | 'small' | 'large';
}

export const NLoading = (props: Props) => {
  const { colors } = useNTheme();
  const { className = '', size = 'large', color = colors.primary } = props;
  return (
    <View className={cn("flex-1 justify-center items-center", className)}>
      <ActivityIndicator animating={true} size={size as any} color={color} />
    </View>
  );
};
