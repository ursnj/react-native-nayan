import {View} from 'react-native';
import { NDivider, NText } from 'react-native-nayan';
const Component = () => {
  return (
    <View className="flex-1 justify-start items-center p-3">
      <NText>This is Horizontal Divider.</NText>
      <NDivider />
      <View className="flex flex-row mt-3">
        <NText className="pr-2">This is</NText>
        <NDivider orientation='vertical' />
        <NText className="pl-2 pr-2">Vertical</NText>
        <NDivider orientation='vertical' />
        <NText className="pl-2">Divider</NText>
      </View>
    </View>
  )
};

export default Component;
