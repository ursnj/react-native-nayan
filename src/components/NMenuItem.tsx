import { View } from 'react-native';
import { NPress } from '@/components/NPress';
import { NText } from '@/components/NText';
import { cn } from '@/lib/utils';

interface Props {
  name: string;
  description?: string;
  className?: string;
  icon: any;
  onPress: () => void;
}

export const NMenuItem = (props: Props) => {
  const { name, description, className = '', icon, onPress } = props;
  const Icon = icon;

  return (
    <NPress className={cn(`flex flex-row justify-start items-center px-3 py-2 bg-card ${className}`)} onPress={onPress}>
      {icon && <Icon />}
      <View className="pl-3">
        <NText className="font-medium mb-0.5">{name}</NText>
        {description && <NText className="text-sm text-muted mt-0">{description}</NText>}
      </View>
    </NPress>
  );
};
