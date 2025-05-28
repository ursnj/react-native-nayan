import { Pressable } from 'react-native';
import { useNTheme } from '@/hooks/useNTheme';
import { MoonStar } from '@/lib/icons/MoonStar';
import { Sun } from '@/lib/icons/Sun';
import { cn, THEMES } from '@/lib/utils';
import { setAndroidNavigationBar } from '@/lib/android-navigation-bar';

interface Props {
  size?: number;
  strokeWidth?: number;
  className?: string;
  onThemeChange: (theme: string) => void;
}

export const NThemeToggle = (props: Props) => {
  const {size = 30, strokeWidth = 1.25, className = '' } = props;
  const { isDarkMode, setTheme, themeColors } = useNTheme();
  const Component = isDarkMode ? MoonStar : Sun;

  function toggleTheme() {
    const newTheme = isDarkMode ? THEMES.light : THEMES.dark;
    setTheme(newTheme);
    setAndroidNavigationBar(newTheme, themeColors);
    props.onThemeChange(newTheme);
  }

  return (
    <Pressable onPress={toggleTheme}>
      <Component className={cn("text-primary", className)} size={size} strokeWidth={strokeWidth} />
    </Pressable>
  );
}
