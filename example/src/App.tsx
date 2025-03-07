import { NText } from 'react-native-nayan';
import { View, Text, Pressable } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <NText />
      <Pressable onPress={() => console.log('Pressed')}>
      <Text className="text-red-500 text-xl mt-3">Text</Text>
      </Pressable>
    </View>
  );
}
