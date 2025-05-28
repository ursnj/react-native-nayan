import {View} from 'react-native';
import { NButton, NDialog, NText } from 'react-native-nayan';
const Component = () => {
  return (
    <View className="flex-1 justify-center items-center p-3">
      <NDialog title="Dialog" trigger={<NButton>Sample</NButton>}>
        <View className="p-3">
          <NText>Sample dialog content.</NText>
        </View>
      </NDialog>
    </View>
  )
};

export default Component;
