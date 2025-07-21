import {View} from 'react-native';
import { NButton, NPopover, NText } from 'react-native-nayan';
const Component = () => {
  return (
    <View className="flex-1 justify-center items-center p-3">
      <NPopover trigger={<NButton>Popover</NButton>}>
        <View className="p-3">
          <NText>Sample dialog content.</NText>
        </View>
      </NPopover>
    </View>
  )
};

export default Component;
