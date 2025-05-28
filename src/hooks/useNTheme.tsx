import { useColorScheme as useNativewindColorScheme } from 'nativewind';
import { useTheme } from '@react-navigation/native';
import { THEMES } from '@/lib/utils';
import { useState } from 'react';

export function useNTheme() {
  const theme: any = useTheme();
  const [themeColors, setColors] = useState(null);
  const { colorScheme, setColorScheme, toggleColorScheme } = useNativewindColorScheme();

  const setThemeColors= (colors: any) => {
    setColors(colors)
  }

  return {
    themeColors,
    setThemeColors,
    theme: colorScheme,
    colors: theme.colors,
    setTheme: setColorScheme,
    toggleTheme: toggleColorScheme,
    isDarkMode: colorScheme === THEMES.dark
  };
}
