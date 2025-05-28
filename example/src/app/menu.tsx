import {View} from 'react-native';
import { NMenu, NMenuItem, NText, NToast } from 'react-native-nayan';

const Component = () => {
  return (
    <View className="flex-1 justify-center items-center p-3">
      <NMenu trigger={<NText>Open Menu</NText>}>
        <NMenuItem title="Item 1" onPress={() => NToast.success("Item 1")}/>
        <NMenuItem title="Item 2" onPress={() => NToast.success("Item 2")}/>
        <NMenuItem title="Item 3" onPress={() => NToast.success("Item 3")}/>
      </NMenu>
    </View>
  )
};

export default Component;
