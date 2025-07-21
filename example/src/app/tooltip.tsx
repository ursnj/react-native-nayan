import {View} from 'react-native';
import { NText, NTooltip } from 'react-native-nayan';

const Component = () => {
  return (
    <View className="flex-1 justify-center items-center p-3">
      <NTooltip message="This is a tooltip message"><NText>Oops...</NText></NTooltip>
    </View>
  )
};

export default Component;
