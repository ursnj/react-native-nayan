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
    <NTheme theme="light" themeColors={themeColors}>
      <View className="flex-1 justify-center items-center">
        <NText className="text-green-500">Sample</NText>
        <NPress onPress={chnageTheme}>
          <NText className="text-red-500 text-xl mt-3">Change Theme</NText>
        </NPress>
      </View>
    </NTheme>
  );
}
