import {View} from 'react-native';
import { NButton, NToast } from 'react-native-nayan';
const Component = () => {
  return (
    <View className="flex flex-row justify-center p-3">
      <NButton className="mr-3" disabled={true}>Disabled</NButton>
      <NButton className="mr-3"  onPress={() => NToast.success("Primary button clicked")}>Primary</NButton>
      <NButton className="bg-transparent" textClassName="text-primary" onPress={() => NToast.success("Custom button clicked")}>Custom</NButton>
    </View>
  )
};

export default Component;
