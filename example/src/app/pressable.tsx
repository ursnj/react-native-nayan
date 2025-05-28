import {View} from 'react-native';
import { NPress, NText, NToast } from 'react-native-nayan';

const Component = () => {
  return (
    <View className="flex-1 justify-center items-center p-3">
      <NPress className="p-3" onPress={() => NToast.success("Press clicked!")}>
        <NText>Press me!</NText>
      </NPress>
    </View>
  )
};

export default Component;
