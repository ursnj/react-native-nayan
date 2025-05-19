import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { NText } from '@/components/NText';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  confirmClassName?: string;
  cancelClassName?: string;
  title: string;
  description: string;
  onResult: (result: boolean) => void;
  children: React.ReactNode;
}

export const NConfirm = (props: Props) => {
  const { title, description, children, onResult, className='', titleClassName = '', descriptionClassName = '', confirmClassName = '', cancelClassName = '' } = props;
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className={cn("bg-card p-3 min-w-[320px]", className)}>
        <AlertDialogHeader>
          <AlertDialogTitle className={cn("text-text", titleClassName)}>{title}</AlertDialogTitle>
          <AlertDialogDescription className={cn("text-text", descriptionClassName)}>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-row">
          <AlertDialogAction onPress={() => onResult(true)}>
            <NText className={cn("text-white", confirmClassName)}>Continue</NText>
          </AlertDialogAction>
          <AlertDialogCancel className="border-muted bg-border" onPress={() => onResult(false)}>
            <NText className={cn("text-text", cancelClassName)}>Cancel</NText>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
