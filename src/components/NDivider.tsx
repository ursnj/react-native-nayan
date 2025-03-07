import { Separator } from '@/components/ui/separator';

interface Props {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const NDivider = (props: Props) => {
  const { orientation = 'horizontal', className } = props;
  return <Separator className={`bg-border ${className}`} orientation={orientation} />;
};
