import '../../global.css';
import 'react-native-reanimated';
import { Stack } from 'expo-router';
import { NTheme, useColorScheme, THEMES } from 'react-native-nayan';
import { components, themeColors } from '../constants';

const RootLayout = () => {
  const {colorScheme } = useColorScheme();

  return (
    <NTheme theme={colorScheme || THEMES.light} themeColors={themeColors}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'React Native Nayan' }} />
        {components.map((component: any) => <Stack.Screen key={component.name} name={component.name} options={{ title: component.title }} />)}
      </Stack>
    </NTheme>
  );
}

export default RootLayout;
