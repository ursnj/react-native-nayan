import {View} from 'react-native';
import { NLinkify, NText } from 'react-native-nayan';
const Component = () => {
  return (
    <View className="flex-1 justify-start items-center p-3">
      <NLinkify>
        <NText>We develop react and react native reusable components, you can check full documentation at www.nayanui.com . for more details email us at hello@nayanui.com</NText>
      </NLinkify>
    </View>
  )
};

export default Component;
