import { useState } from 'react';
import { View } from 'react-native';
import { format } from 'date-fns';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { NText } from '@/components/NText';
import { Calendar } from '@/lib/icons/Calender';
import { useColorScheme } from '@/hooks/useColorScheme';
import { cn } from '@/lib/utils';
import { NPress } from '@/components/NPress';

interface Props {
  value: Date;
  label?: string;
  isDarkMode?: boolean;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  type?: 'date' | 'time' | 'datetime';
  onChange: (date: Date) => void;
}

export const NDatePicker = (props: Props) => {
  const { isDarkColorScheme } = useColorScheme();
  const { label = '', type = 'date', isDarkMode = isDarkColorScheme, disabled = false, className = '', labelClassName = '', inputClassName = '', value, onChange } = props;
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
        mode={type}
        date={value}
        disabled={disabled}
        isDarkModeEnabled={isDarkMode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <NPress
        onPress={showDatePicker}
        className={cn('flex-1 flex-row justify-between items-center bg-card border border-border rounded px-3 py-2.5', className)}>
        <NText className="text-lg">{formatValue(value)}</NText>
        <Calendar strokeWidth={1} className="w-5 h-5 text-text" />
      </NPress>
    </View>
  );
};
