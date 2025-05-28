import { DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut } from '@/components/ui/dropdown-menu';
import { NText } from './NText';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  shortcut?: string;
  icon?: any;
  hasSeparator?: boolean;
  className?: string;
  textClassName?: string;
  shortcutClassName?: string;
}

export const NMenuItem = (props: Props) => {
  const { title, shortcut = '', hasSeparator = false, icon = null, className = '', textClassName = '', shortcutClassName = '' } = props;
  const Icon = () => icon;

  return (
    <>
      <DropdownMenuItem className={className}>
        {icon && <Icon />}
        <NText className={textClassName}>{title}</NText>
        {shortcut && <DropdownMenuShortcut className={cn("text-muted", shortcutClassName)}>{shortcut}</DropdownMenuShortcut>}
      </DropdownMenuItem>
      {hasSeparator && <DropdownMenuSeparator/>}
    </>
  )
};
