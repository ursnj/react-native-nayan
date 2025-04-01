import { View } from 'react-native';
import { NButton, useColorScheme, THEMES } from 'react-native-nayan';

export default function Home() {
  const {isDarkColorScheme, setColorScheme} = useColorScheme();

  const changeTheme = () => {
    setColorScheme(isDarkColorScheme ? THEMES.light : THEMES.dark);
  }

  return (
      <View className="flex-1 justify-center items-center bg-background">
        <NButton onPress={changeTheme}>Change Theme</NButton>
      </View>
  );
}
