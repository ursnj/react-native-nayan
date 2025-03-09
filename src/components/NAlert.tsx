import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from '@/lib/icons/AlertCircle';
import { cn } from '@/lib/utils';

interface Props {
  title?: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const NAlert = (props: Props) => {
  const { title = '', description, className = '', titleClassName = '', descriptionClassName = '' } = props;
  return (
    <Alert icon={AlertCircle} className={cn('w-full bg-card border-border shadow-none rounded', className)}>
      {title && <AlertTitle className={cn('text-text font-medium mb-3', titleClassName)}>{title}</AlertTitle>}
      <AlertDescription className={cn('text-text -mt-2', descriptionClassName)}>{description}</AlertDescription>
    </Alert>
  );
};
