import '../global.css';
import 'react-native-reanimated';
import { NText, NPress, NTheme, useColorScheme } from 'react-native-nayan';
import { View } from 'react-native';
import { themeColors } from './constants';

export default function App() {
  const {colorScheme, setColorScheme} = useColorScheme();

  const chnageTheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <NTheme theme={colorScheme} themeColors={themeColors}>
      <View className="flex-1 justify-center items-center">
        <NPress onPress={chnageTheme}>
          <NText className="text-text text-xl mt-3">Change Theme</NText>
        </NPress>
      </View>
    </NTheme>
  );
}
