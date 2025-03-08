import { View } from 'react-native';
import { NPress } from '@/components/NPress';
import { NText } from '@/components/NText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { cn } from '@/lib/utils';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  name: string;
  description?: string;
  className?: string;
  icon: any;
  onPress: () => void;
}

export const NMenuItem = (props: Props) => {
  const { name, description, className = '', icon, onPress } = props;
  const { colors } = useColorScheme();

  return (
    <NPress className={cn(`flex flex-row justify-start items-center px-3 py-2 bg-card ${className}`)} onPress={onPress}>
      <Ionicons name={icon} size={24} color={colors.primary} />
      <View className="pl-3">
        <NText className="font-medium mb-0.5">{name}</NText>
        {description && <NText className="text-sm text-muted mt-0">{description}</NText>}
      </View>
    </NPress>
  );
};
