import { type TextInputProps, View } from 'react-native';
import { Textarea } from '@/components/ui/textarea';
import { NText } from '@/components/NText';
import { cn } from '@/lib/utils';

interface Props extends TextInputProps {
  value: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onChangeText: (text: string) => void;
}

export const NTextarea = (props: Props) => {
  const { value, label = '', placeholder = '', className = '', onChangeText, disabled = false, ...remaining } = props;

  return (
    <View className="flex-1 mb-3">
      {label && <NText className="mb-1">{label}</NText>}
      <Textarea
        value={value}
        editable={!disabled}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderClassName="text-muted"
        textAlignVertical="top"
        className={cn('text-text text-base border border-border bg-card', className)}
        {...remaining}
      />
    </View>
  );
};
