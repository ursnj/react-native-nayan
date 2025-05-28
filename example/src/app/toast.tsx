import {View} from 'react-native';
import { NButton, NToast } from 'react-native-nayan';

const Component = () => {
  return (
    <View className="flex-1 justify-center items-center p-3">
      <NButton className="mb-3" onPress={() => NToast.success("Success")}>Success Toast</NButton>
      <NButton className="" onPress={() => NToast.error("Error")}>Error Toast</NButton>
    </View>
  );
};

export default Component;
