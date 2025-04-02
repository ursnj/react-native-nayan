import {View} from 'react-native';
import { NActionItem, NToast, useColorScheme } from 'react-native-nayan';
import Ionicons from '@expo/vector-icons/Ionicons';

const Component = () => {
  const {colors} = useColorScheme();

  return (
    <View className="flex-1 p-3">
      <NActionItem
        className="rounded border border-border mb-3"
        name="Default Action Item"
        description="This is a default action item."
        icon={<Ionicons name="flag" size={23} color={colors.text} />}
        onPress={() => NToast.success("Default item clicked")} />
      <NActionItem
        className="rounded border border-primary bg-primary mb-3"
        titleClassName="text-text"
        descriptionClassName="text-text"
        name="Custom Action Item"
        description="This is a custom action item."
        icon={<Ionicons name="trash" size={23} color={colors.text} />}
        onPress={() => NToast.success("Custom item clicked")} />
    </View>
  )
};

export default Component;
