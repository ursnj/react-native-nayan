import {View} from 'react-native';
import { NAlert } from 'react-native-nayan';

const Component = () => {
  return (
    <View className="flex-1 p-3">
      <NAlert
        className=""
        titleClassName=""
        descriptionClassName=""
        title="Alert Title"
        description="This is an alert description. You can use this component to show alerts to users."
      />
    </View>
  )
};

export default Component;
