import { useEffect } from 'react';
import { useColorScheme as useNativewindColorScheme } from 'nativewind';
import { setAndroidNavigationBar } from '@/lib/android-navigation-bar';
import { StorageService } from '@/services/StorageService';
import { useTheme } from '@react-navigation/native';

export const THEMES = {
  light: 'light',
  dark: 'dark'
} as any;

export function useColorScheme() {
  const theme: any = useTheme();
  const { colorScheme, setColorScheme, toggleColorScheme } = useNativewindColorScheme();
  const storedTheme = StorageService.get('THEME');
  const finalTheme = storedTheme ?? colorScheme ?? THEMES.light;

  useEffect(() => {
    setColorScheme(finalTheme);
    setAndroidNavigationBar(finalTheme);
  }, []);

  return {
    colorScheme,
    setColorScheme,
    toggleColorScheme,
    colors: theme.colors,
    isDarkColorScheme: colorScheme === THEMES.dark
  };
}
