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

interface Props {
  title: string;
  description: string;
  onResult: (result: boolean) => void;
  children: React.ReactNode;
}

export const NConfirm = (props: Props) => {
  const { title, description, children, onResult } = props;
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="bg-card p-3 min-w-[320px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-text">{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-text">{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-row">
          <AlertDialogAction onPress={() => onResult(true)}>
            <NText className="text-white">Continue</NText>
          </AlertDialogAction>
          <AlertDialogCancel className="border-muted bg-border" onPress={() => onResult(false)}>
            <NText>Cancel</NText>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
