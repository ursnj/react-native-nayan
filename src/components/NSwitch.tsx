import { View } from 'react-native';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

interface Props {
  label?: string;
  checked: boolean;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

export const NSwitch = (props: Props) => {
  const { label, className = '', labelClassName = '', inputClassName = '', disabled = false, onChange, checked = false } = props;

  return (
    <View className={cn("w-full flex-row items-center justify-between mb-3", className)}>
      <Label className={cn("flex-1 text-text text-base pr-3", labelClassName)} nativeID={'switch-' + label} onPress={() => !disabled && onChange(!checked)}>
        {label}
      </Label>
      <Switch
        disabled={disabled}
        className={cn(`${checked ? 'bg-primary' : 'bg-muted opacity-80'} border-border`, inputClassName)}
        checked={checked}
        onCheckedChange={() => !disabled && onChange(!checked)}
        nativeID={'switch-' + label}
      />
    </View>
  );
};
