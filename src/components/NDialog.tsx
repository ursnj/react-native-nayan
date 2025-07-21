import * as React from 'react';
import { View } from 'react-native';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface Props {
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  title: string;
  buttonText?: string;
  className?: string;
  headerClassName?: string;
  headerTitleClassName?: string;
  contentClassName?: string;
}

export const NDialog = (props: Props) => {
  const { children, trigger, title, className = '', headerClassName = '', headerTitleClassName = '', contentClassName = '' } = props;
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={cn("border-border rounded p-0 min-w-[320px] sm:max-w-[425px]", className)}>
        <DialogHeader className={cn("px-3 py-2", headerClassName)}>
          <DialogTitle className={cn("text-text", headerTitleClassName)}>{title}</DialogTitle>
        </DialogHeader>
        <View className={contentClassName}>{children}</View>
      </DialogContent>
    </Dialog>
  );
};
