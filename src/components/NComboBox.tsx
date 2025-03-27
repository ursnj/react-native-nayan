import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { NText } from '@/components/NText';
import { cn } from '@/lib/utils';

interface Props {
  label?: string;
  selectLabel?: string;
  placeholder?: string;
  disabled?: boolean;
  value: { label: string; value: string }[];
  items: { label: string; value: string }[];
  onChange: (value: { label: string; value: string }[]) => void;
}

export const NSelect = (props: Props) => {
  const { label = '', selectLabel = '', placeholder = '', disabled = false, value = [], items, onChange } = props;
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12
  };

  const handleSelect = (selectedValue: string) => {
    const isSelected = value.some(item => item.value === selectedValue);
    let newValue;

    if (isSelected) {
      newValue = value.filter(item => item.value !== selectedValue);
    } else {
      const selectedItem = items.find(item => item.value === selectedValue);
      newValue = selectedItem ? [...value, selectedItem] : value;
    }

    onChange(newValue);
  };

  return (
    <View className="flex-1 mb-3">
      {label && <NText className="mb-1">{label}</NText>}
      <Select value={value.map(item => item.value)} onValueChange={handleSelect} disabled={disabled} multiple>
        <SelectTrigger className={cn('w-full bg-card border-border', disabled && 'opacity-70')} disabled={disabled}>
          <SelectValue
            className="text-text text-sm native:text-lg"
            placeholder={placeholder}
            value={value.map(item => item.label).join(', ')}
          />
        </SelectTrigger>
        <SelectContent insets={contentInsets} className="w-full bg-card border-border shadow">
          <ScrollView className="max-h-[250px]">
            <SelectGroup>
              {selectLabel && <SelectLabel className="text-text">{selectLabel}</SelectLabel>}
              {items.map(item => (
                <SelectItem
                  className="text-text"
                  key={item.value}
                  label={item.label}
                  value={item.value}
                  selected={value.some(v => v.value === item.value)}
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </ScrollView>
        </SelectContent>
      </Select>
    </View>
  );
};
