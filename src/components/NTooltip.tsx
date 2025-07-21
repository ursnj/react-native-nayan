import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { NText } from '@/components/NText';
import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  message: string;
  className?: string;
  textClassName?: string;
}

export const NTooltip = (props: Props) => {
  const { children, message, className = '', textClassName = '' } = props;
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12
  };

  return (
    <Tooltip delayDuration={150}>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent insets={contentInsets} className={cn('bg-card border border-border max-w-[250px]', className)}>
        <NText className={textClassName}>{message}</NText>
      </TooltipContent>
    </Tooltip>
  );
};
