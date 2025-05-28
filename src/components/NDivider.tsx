import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const NDivider = (props: Props) => {
  const { orientation = 'horizontal', className } = props;
  return <Separator className={cn(`bg-border`, className)} orientation={orientation as any} />;
};
