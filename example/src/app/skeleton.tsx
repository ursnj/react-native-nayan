import {View} from 'react-native';
import { NSkeleton } from 'react-native-nayan';

const Component = () => {
  return (
    <View className="flex-1 justify-start items-center p-3">
      <NSkeleton className="w-full h-16 mb-3" />
      <NSkeleton className="w-full h-16 mb-3" />
      <NSkeleton className="w-full h-16 mb-3" />
      <NSkeleton className="w-full h-16 mb-3" />
    </View>
  )
};

export default Component;
