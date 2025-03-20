import '../global.css';
import 'react-native-reanimated';
import { View } from 'react-native';
import { NButton, NTheme, useColorScheme, THEMES, NMenu, NMenuItem, NText, Sun } from 'react-native-nayan';
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
        <NMenu title="Post menu" trigger={<NText>Menu</NText>}>
          <NMenuItem title="Edit" shortcut="⇧⌘Q" icon={<Sun className="w-6 h-6" />} />
        </NMenu>
      </View>
    </NTheme>
  );
}
