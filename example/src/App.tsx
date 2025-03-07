import '../global.css';
import 'react-native-reanimated';
import { NText, NPress } from 'react-native-nayan';
import { View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <NText className="text-green-500">Sample</NText>
      <NPress onPress={() => console.log('Pressed')}>
        <NText className="text-red-500 text-xl mt-3">Text</NText>
      </NPress>
    </View>
  );
}
