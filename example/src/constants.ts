import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const themeColors = {
  light: {
    ...DefaultTheme,
    colors: {
      primary: 'hsl(215 100% 45%)',
      background: 'hsl(216 20% 95%)',
      card: 'hsl(0 0% 100%)',
      text: 'hsl(0 0% 2%)',
      muted: 'hsl(0 0% 50%)',
      border: 'hsl(0 0% 88%)',
      notification: 'hsl(0 0% 100%)'
    }
  },
  dark: {
    ...DarkTheme,
    colors: {
      primary: 'hsl(209 100% 58%)',
      background: 'hsl(0 0% 12%)',
      card: 'hsl(0 0% 21%)',
      text: 'hsl(0 0% 96%)',
      muted: 'hsl(0 0% 69%)',
      border: 'hsl(0 0% 31%)',
      notification: 'hsl(0 0% 21%)'
    }
  }
};

export const components = [
  {name: 'accordion', title: 'Accordion' },
  {name: 'action-item', title: 'Action Item' },
  {name: 'alert', title: 'Alert' },
  {name: 'button', title: 'Button' },
  {name: 'button-group', title: 'Button Group' },
  {name: 'card', title: 'Card' },
  {name: 'checkbox', title: 'Checkbox' },
  {name: 'color-picker', title: 'Color Picker' },
  {name: 'confirm', title: 'Confirm' },
  {name: 'date-picker', title: 'Date Picker' },
  {name: 'dialog', title: 'Dialog' },
  {name: 'divider', title: 'Divider' },
  {name: 'input', title: 'Input' },
  {name: 'linkify', title: 'Linkify' },
  {name: 'loader', title: 'Loader' },
  {name: 'menu', title: 'Dropdown Menu' },
  {name: 'popover', title: 'Popover' },
  {name: 'pressable', title: 'Pressable' },
  {name: 'progress', title: 'Progress' },
  {name: 'radio', title: 'Radio' },
  {name: 'select', title: 'Select' },
  {name: 'sheet', title: 'Sheet' },
  {name: 'skeleton', title: 'Skeleton' },
  {name: 'switch', title: 'Switch' },
  {name: 'text', title: 'Text' },
  {name: 'textarea', title: 'Textarea' },
  {name: 'theme', title: 'Theme' },
  {name: 'toast', title: 'Toast' },
  {name: 'tooltip', title: 'Tooltip' }
];
