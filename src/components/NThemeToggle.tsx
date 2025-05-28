import { Pressable } from 'react-native';
import { cn, MoonStar, setAndroidNavigationBar, Sun, THEMES, useNTheme } from 'react-native-nayan';

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
    <Pressable onPress={toggleTheme} className="px-6 py-5 flex justify-start items-start">
      <Component className={cn("text-primary", className)} size={size} strokeWidth={strokeWidth} />
    </Pressable>
  );
}
