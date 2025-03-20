import { type ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface Props {
  children?: ReactNode;
  trigger: ReactNode;
  icon?: any;
  title?: string
}

export const NMenu = (props: Props) => {
  const { children, trigger, title = '' } = props;
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
      <DropdownMenuContent insets={contentInsets} className='w-64 native:w-64 bg-card'>
        {title && (
          <>
            <DropdownMenuLabel className="text-text">{title}</DropdownMenuLabel>
            <DropdownMenuSeparator/>
          </>
        )}
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
