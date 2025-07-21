import { Stack, useRouter } from 'expo-router';
import { ScrollView } from 'react-native';
import { NPress, NText, THEMES, NCard, NThemeToggle, useNTheme } from 'react-native-nayan';
import { components } from '../constants';

export default function Home() {
  const router = useRouter();
  const {isDarkMode, setTheme} = useNTheme();

  const changeTheme = () => {
    setTheme(isDarkMode ? THEMES.light : THEMES.dark);
  }

  return (
      <ScrollView className="flex-1 bg-background p-1.5 pb-10">
        <Stack.Screen options={{headerRight: () => (
            <NPress onPress={changeTheme} className="p-3">
              <NThemeToggle onThemeChange={() => undefined} />
            </NPress>
          )}} />
        {components.map((component: any) => (
          <NPress key={component.name} className="m-1.5" onPress={() => router.navigate({ pathname: component.name })}>
            <NCard className="py-3 px-4">
              <NText className="text-lg">{component.title}</NText>
            </NCard>
          </NPress>
        ))}
      </ScrollView>
  );
}
