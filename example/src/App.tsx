import '../global.css';
import 'react-native-reanimated';
import { View } from 'react-native';
import { NText, NPress, NTheme, useColorScheme, THEMES } from 'react-native-nayan';
import { themeColors } from './constants';

export default function App() {
  const {colorScheme, isDarkColorScheme, setColorScheme} = useColorScheme();

  const changeTheme = () => {
    setColorScheme(isDarkColorScheme ? THEMES.light : THEMES.dark);
  }

  return (
    <NTheme theme={colorScheme || THEMES.light} themeColors={themeColors}>
      <View className="flex-1 justify-center items-center">
        <NPress onPress={changeTheme}>
          <NText className="text-text text-xl mt-3">Change Theme</NText>
        </NPress>
      </View>
    </NTheme>
  );
}
