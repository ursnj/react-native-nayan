import {View} from 'react-native';
import { NButton, NToast } from 'react-native-nayan';
const Component = () => {
  return (
    <View className="flex-1 justify-center items-center p-3">
      <NButton className="mb-3" disabled={true}>Disabled</NButton>
      <NButton className="mb-3"  onPress={() => NToast.success("Primary button clicked")}>Primary</NButton>
      <NButton className="bg-transparent" textClassName="text-primary" onPress={() => NToast.success("Custom button clicked")}>Custom</NButton>
    </View>
  )
};

export default Component;
