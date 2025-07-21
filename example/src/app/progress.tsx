import {View} from 'react-native';
import { NProgress } from 'react-native-nayan';

const Component = () => {
  return (
    <View className="flex-1 justify-center items-center p-3">
      <NProgress value={20} />
    </View>
  )
};

export default Component;
