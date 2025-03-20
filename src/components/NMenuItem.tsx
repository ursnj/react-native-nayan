import { DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut } from '@/components/ui/dropdown-menu';
import { NText } from './NText';

interface Props {
    title: string;
    shortcut?: string;
    hasSeparator?: boolean;
}

export const NMenuItem = (props: Props) => {
  const { title, shortcut = '', hasSeparator = false } = props;

  return (
    <>
      <DropdownMenuItem>
        <NText>{title}</NText>
        {shortcut && <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>}
      </DropdownMenuItem>
      {hasSeparator && <DropdownMenuSeparator/>}
    </>
  )
};
