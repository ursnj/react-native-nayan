import { DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut } from '@/components/ui/dropdown-menu';
import { NText } from './NText';

interface Props {
    title: string;
    shortcut?: string;
    icon?: any;
    hasSeparator?: boolean;
}

export const NMenuItem = (props: Props) => {
  const { title, shortcut = '', hasSeparator = false, icon = null } = props;
  const Icon = !!icon ? icon : <></>;

  return (
    <>
      <DropdownMenuItem>
        <Icon />
        <NText>{title}</NText>
        {shortcut && <DropdownMenuShortcut className="text-muted">{shortcut}</DropdownMenuShortcut>}
      </DropdownMenuItem>
      {hasSeparator && <DropdownMenuSeparator/>}
    </>
  )
};
