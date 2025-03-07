import * as React from 'react';
import { View } from 'react-native';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Props {
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  title: string;
  buttonText?: string;
  className?: string;
}

export const NDialog = (props: Props) => {
  const { children, trigger, title, className = '' } = props;
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="border-border rounded p-0 min-w-[320px] sm:max-w-[425px]">
        <DialogHeader className="p-3">
          <DialogTitle className="text-text">{title}</DialogTitle>
        </DialogHeader>
        <View className={className}>{children}</View>
      </DialogContent>
    </Dialog>
  );
};
