import {View} from 'react-native';
import { NText } from 'react-native-nayan';

const Component = () => {
  return (
    <View className="flex-1 justify-start items-center p-3">
      <NText>This is default text</NText>
      <NText className="text-red-500">This is customized text</NText>
    </View>
  )
};

export default Component;
