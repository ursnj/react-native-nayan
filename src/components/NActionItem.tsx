import {useCallback} from 'react';
import { View } from 'react-native';
import { NPress } from '@/components/NPress';
import { NText } from '@/components/NText';
import { cn } from '@/lib/utils';

interface Props {
  name: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  icon: any;
  onPress: () => void;
}

export const NActionItem = (props: Props) => {
  const { name, description = '', className = '', titleClassName = '', descriptionClassName = '', icon, onPress } = props;
  const Icon = useCallback(() => icon, []);

  return (
    <NPress className={cn('flex flex-row justify-start items-center px-3 py-2 bg-card', className)} onPress={onPress}>
      {icon && <Icon />}
      <View className="pl-3">
        <NText className={cn("font-medium mb-0.5", titleClassName)}>{name}</NText>
        {description && <NText className={cn("text-sm text-muted mt-0", descriptionClassName)}>{description}</NText>}
      </View>
    </NPress>
  );
};
