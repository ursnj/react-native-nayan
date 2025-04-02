import { View } from 'react-native';
import { Button } from '@/components/ui/button';
import { NText } from '@/components/NText';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  label?: string;
  size?: 'sm' | 'default' | 'lg' | any;
  items: string[];
  value: string;
  disabled?: boolean;
  onChange: (selected: string) => void;
}

export const NButtonGroup = (props: Props) => {
  const { className = '', items, value, size = 'default', label = '', disabled = false, onChange } = props;
  return (
    <View className="w-full flex flex-row justify-between items-center mb-3">
      {label && <NText className="mb-1">{label}</NText>}
      <View className="flex-row rounded">
        {items.map((item, index) => (
          <Button
            size={size}
            key={item}
            disabled={disabled}
            onPress={() => onChange(item)}
            className={cn(
              `${item === value ? 'bg-primary' : 'bg-card'} rounded-none border border-border ${index === 0 ? 'rounded-l-lg' : ''} ${index === items.length - 1 ? 'rounded-r-lg' : ''} ${className}`
            )}>
            <NText className={`${item === value ? 'text-white' : ''}`}>{item}</NText>
          </Button>
        ))}
      </View>
    </View>
  );
};
