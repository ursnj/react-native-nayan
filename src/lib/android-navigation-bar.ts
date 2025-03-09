import { Platform } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { THEMES } from './utils';

export async function setAndroidNavigationBar(theme: string, themeColors: any) {
  if (Platform.OS !== 'android') return;
  await NavigationBar.setButtonStyleAsync(theme === THEMES.dark ? THEMES.light : THEMES.dark);
  await NavigationBar.setBackgroundColorAsync(theme === THEMES.dark ? themeColors.dark.colors.background : themeColors.light.colors.background);
}
