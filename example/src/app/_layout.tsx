import '../../global.css';
import 'react-native-reanimated';
import { Stack } from 'expo-router';
import { NTheme, THEMES, useNTheme } from 'react-native-nayan';
import { components, themeColors } from '../constants';

const RootLayout = () => {
  const { theme } = useNTheme();

  return (
    <NTheme theme={theme || THEMES.light} themeColors={themeColors}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'React Native Nayan' }} />
        {components.map((component: any) => <Stack.Screen key={component.name} name={component.name} options={{ title: component.title }} />)}
      </Stack>
    </NTheme>
  );
}

export default RootLayout;
