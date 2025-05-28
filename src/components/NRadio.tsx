import { View } from 'react-native';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { NText } from '@/components/NText';
import { cn } from '@/lib/utils';

interface RadioGroupProps {
  disabled?: boolean;
  item: { label: string; value: string };
  onLabelPress: (value: string) => void;
  radioItemClassName?: string;
  radioClassName?: string;
  radioLabelClassName?: string;
}

const RadioGroupItemWithLabel = (props: RadioGroupProps) => {
  const { disabled, item, onLabelPress, radioItemClassName = '', radioLabelClassName = '', radioClassName = '' } = props;

  return (
    <View className={cn('flex-row gap-2 items-center', radioItemClassName)}>
      <RadioGroupItem className={radioClassName} disabled={disabled} aria-labelledby={`label-for-${item.value}`} value={item.value} />
      <Label
        disabled={disabled}
        className={cn('text-text native:text-lg', disabled && 'opacity-70', radioLabelClassName)}
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
  className?: string;
  labelClassName?: string;
  radioGroupClassName?: string;
  radioItemClassName?: string;
  radioClassName?: string;
  radioLabelClassName?: string;
}

export const NRadio = (props: Props) => {
  const { label, value, items, disabled = false, onChange, className = '', labelClassName = '', radioGroupClassName = '' } = props;

  return (
    <View className={cn("flex-1 mb-3", className)}>
      <NText className={cn("mb-2", labelClassName)}>{label}</NText>
      <RadioGroup value={value} onValueChange={onChange} disabled={disabled} className={cn("gap-3 flex-row flex-wrap", radioGroupClassName)}>
        {items.map(item => (
          <RadioGroupItemWithLabel key={item.value} disabled={disabled} item={item} onLabelPress={onChange} radioItemClassName={props.radioItemClassName} radioClassName={props.radioClassName} radioLabelClassName={props.radioLabelClassName} />
        ))}
      </RadioGroup>
    </View>
  );
};
