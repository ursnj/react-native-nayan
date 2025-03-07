import { View } from 'react-native';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

interface Props {
  label?: string;
  checked: boolean;
  className?: string;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

export const NSwitch = (props: Props) => {
  const { label, className = '', disabled = false, onChange, checked = false } = props;

  return (
    <View className="w-full flex-row items-center justify-between mb-3">
      <Label className="text-text text-base pr-3" nativeID={'switch-' + label} onPress={() => !disabled && onChange(!checked)}>
        {label}
      </Label>
      <Switch
        disabled={disabled}
        className={`${checked ? 'bg-primary' : 'bg-muted'} border-border ${className}`}
        checked={checked}
        onCheckedChange={onChange}
        nativeID={'switch-' + label}
      />
    </View>
  );
};
