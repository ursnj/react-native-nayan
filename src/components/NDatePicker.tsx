import { useState } from 'react';
import { View } from 'react-native';
import { format } from 'date-fns';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { NText } from '@/components/NText';
import { Calendar } from '@/lib/icons/Calender';
import { cn } from '@/lib/utils';
import { NPress } from '@/components/NPress';
import { useNTheme } from '@/hooks/useNTheme';

interface Props {
  value: Date;
  label?: string;
  isDarkMode?: boolean;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  inputTextClassName?: string;
  inputIconClassName?: string;
  type?: 'date' | 'time' | 'datetime';
  onChange: (date: Date) => void;
}

export const NDatePicker = (props: Props) => {
  const { isDarkMode: isDarkTheme } = useNTheme();
  const { label = '', type = 'date', isDarkMode = isDarkTheme, disabled = false, className = '', labelClassName = '', inputClassName = '', inputTextClassName = '', inputIconClassName = '', value, onChange } = props;
  const [isVisible, setIsVisible] = useState(false);

  const hideDatePicker = () => {
    setIsVisible(false);
  };

  const showDatePicker = () => {
    setIsVisible(true);
  };

  const handleConfirm = (date: Date) => {
    onChange(date);
    hideDatePicker();
  };

  const formatValue = (date: Date) => {
    if (type === 'time') {
      return format(date, 'HH:mm:ss');
    }
    if (type === 'date') {
      return format(date, 'yyyy-MM-dd');
    }
    return format(date, 'yyy-MM-dd HH:mm:ss');
  };

  return (
    <View className={cn("w-full mb-3", className)}>
      {label && <NText className={cn("mb-1", labelClassName)}>{label}</NText>}
      <DateTimePickerModal
        isVisible={isVisible}
        mode={type as any}
        date={value}
        disabled={disabled}
        isDarkModeEnabled={isDarkMode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <NPress
        onPress={showDatePicker}
        className={cn('flex flex-row justify-between items-center bg-card border border-border rounded px-3 py-2.5', inputClassName)}>
        <NText className={cn("text-lg", inputTextClassName)}>{formatValue(value)}</NText>
        <Calendar strokeWidth={1} className={cn("w-5 h-5 text-text", inputIconClassName)} />
      </NPress>
    </View>
  );
};
