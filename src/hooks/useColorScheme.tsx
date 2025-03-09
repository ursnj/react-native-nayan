import { useColorScheme as useNativewindColorScheme } from 'nativewind';
import { useTheme } from '@react-navigation/native';
import { THEMES } from '@/lib/utils';

export function useColorScheme() {
  const theme: any = useTheme();
  const { colorScheme, setColorScheme, toggleColorScheme } = useNativewindColorScheme();

  return {
    colorScheme,
    setColorScheme,
    toggleColorScheme,
    colors: theme.colors,
    isDarkColorScheme: colorScheme === THEMES.dark
  };
}
