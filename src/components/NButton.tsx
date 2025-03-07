import { type PressableProps } from 'react-native';
import { NPress } from '@/components/NPress';
import { NText } from '@/components/NText';
import { cn } from '@/lib/utils';

interface Props extends PressableProps {
  className?: string;
  textClassName?: string;
}

export const NButton = (props: Props) => {
  const { className = '', textClassName = '', ...remaining } = props;
  return (
    <NPress
      className={cn('bg-primary active:opacity-90 border border-primary rounded px-5 py-3', props.disabled && 'opacity-60', className)}
      role="button"
      {...remaining}>
      <NText className={`text-white text-center font-medium ${textClassName}`}>{props.children as any}</NText>
    </NPress>
  );
};
