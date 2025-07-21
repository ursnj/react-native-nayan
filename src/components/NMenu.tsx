import { type ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface Props {
  children?: ReactNode;
  trigger: ReactNode;
  icon?: any;
  title?: string;
  className?: string;
  titleClassName?: string;
}

export const NMenu = (props: Props) => {
  const { children, trigger, title = '', className= '', titleClassName = '' } = props;
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent insets={contentInsets} className={cn('w-64 native:w-64 bg-card', className)}>
        {title && (
          <>
            <DropdownMenuLabel className={cn("text-text", titleClassName)}>{title}</DropdownMenuLabel>
            <DropdownMenuSeparator/>
          </>
        )}
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
