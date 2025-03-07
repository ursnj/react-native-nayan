import { ActivityIndicator, View } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';

export const NLoading = () => {
  const { colors } = useColorScheme();
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator animating={true} size="large" color={colors.primary} />
    </View>
  );
};
