import {View} from 'react-native';
import { NActionItem, NToast, useColorScheme } from 'react-native-nayan';
import Ionicons from '@expo/vector-icons/Ionicons';

const Component = () => {
  const {colors} = useColorScheme();

  return (
    <View className="flex-1 p-3">
      <NActionItem
        className="rounded border border-border mb-3"
        name="Report Post"
        description="Report post if its inappropriate."
        icon={<Ionicons name="flag" size={23} color={colors.text} />}
        onPress={() => NToast.success("Report item clicked")} />
      <NActionItem
        className="rounded border border-border mb-3"
        name="Delete Post"
        description="Delete post if its no longer needed."
        icon={<Ionicons name="trash" size={23} color={colors.text} />}
        onPress={() => NToast.success("Delete item clicked")} />
    </View>
  )
};

export default Component;
