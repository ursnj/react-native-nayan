import { Stack, useRouter } from 'expo-router';
import { ScrollView } from 'react-native';
import { NPress, NText, useColorScheme, THEMES } from 'react-native-nayan';
import { components } from '../constants';

export default function Home() {
  const router = useRouter();
  const {isDarkColorScheme, setColorScheme} = useColorScheme();

  const changeTheme = () => {
    setColorScheme(isDarkColorScheme ? THEMES.light : THEMES.dark);
  }

  return (
      <ScrollView className="flex-1 bg-background pb-3">
        <Stack.Screen options={{headerRight: () => {
          return (
            <NPress onPress={changeTheme} className="p-3">
              <NText>{isDarkColorScheme ? 'Light' : 'Dark'}</NText>
            </NPress>
          );
          }}} />
        {components.map((component: any) => <NPress key={component.name} className="py-3 px-4 bg-card m-3 mb-0 border border-border rounded" onPress={() => router.navigate({ pathname: component.name })}><NText>{component.title}</NText></NPress>)}
      </ScrollView>
  );
}
