import '../global.css';
import 'react-native-reanimated';
import { View } from 'react-native';
import { NButton, NTheme, useColorScheme, THEMES } from 'react-native-nayan';
import { themeColors } from './constants';

export default function App() {
  const {colorScheme, isDarkColorScheme, setColorScheme} = useColorScheme();

  const changeTheme = () => {
    setColorScheme(isDarkColorScheme ? THEMES.light : THEMES.dark);
  }

  return (
    <NTheme theme={colorScheme || THEMES.light} themeColors={themeColors}>
      <View className="flex-1 justify-center items-center bg-background">
        <NButton onPress={changeTheme}>Change Theme</NButton>
      </View>
    </NTheme>
  );
}
