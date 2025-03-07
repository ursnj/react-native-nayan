import { View } from 'react-native';
import { Checkbox } from '@/components/ui/checkbox';
import { NText } from '@/components/NText';

interface Props {
  checked: boolean;
  disabled?: boolean;
  label: string;
  onChange: (checked: boolean) => void;
}

export const NCheck = (props: Props) => {
  const { checked = false, disabled = false, label = '', onChange } = props;
  return (
    <View className="flex flex-row items-center mb-3">
      <Checkbox checked={checked} disabled={disabled} onCheckedChange={onChange} />
      {label && <NText className="pl-3">{label}</NText>}
    </View>
  );
};
