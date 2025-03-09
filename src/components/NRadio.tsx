import { View } from 'react-native';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { NText } from '@/components/NText';
import { cn } from '@/lib/utils';

interface RadioGroupProps {
  disabled?: boolean;
  item: { label: string; value: string };
  onLabelPress: (value: string) => void;
}

const RadioGroupItemWithLabel = (props: RadioGroupProps) => {
  const { disabled, item, onLabelPress } = props;

  return (
    <View className={'flex-row gap-2 items-center'}>
      <RadioGroupItem disabled={disabled} aria-labelledby={`label-for-${item.value}`} value={item.value} />
      <Label
        disabled={disabled}
        className={cn('text-text native:text-lg', disabled && 'opacity-70')}
        nativeID={`label-for-${item.value}`}
        onPress={() => !disabled && onLabelPress(item.value)}>
        {item.label}
      </Label>
    </View>
  );
};

interface Props {
  label?: string;
  disabled?: boolean;
  value: string;
  items: { label: string; value: string }[];
  onChange: (value: string) => void;
}

export const NRadio = (props: Props) => {
  const { label, value, items, disabled = false, onChange } = props;

  return (
    <View className="flex-1 mb-3">
      <NText className="mb-2">{label}</NText>
      <RadioGroup value={value} onValueChange={onChange} disabled={disabled} className="gap-3 flex-row flex-wrap">
        {items.map(item => (
          <RadioGroupItemWithLabel key={item.value} disabled={disabled} item={item} onLabelPress={onChange} />
        ))}
      </RadioGroup>
    </View>
  );
};
