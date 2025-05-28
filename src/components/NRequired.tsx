import { NText } from '@/components/NText';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const NRequired = (props: Props) => {
  const {className = ''} = props;
  return <NText className={cn("text-red-500", className)}>*</NText>;
};
