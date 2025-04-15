import {View} from 'react-native';
import { NAlert } from 'react-native-nayan';

const Component = () => {
  return (
    <View className="flex-1 p-3">
      <NAlert
        title="Default Alert"
        description="This is an alert description. You can use this component to show alerts to users."
      />
      <NAlert
        className="bg-primary mt-3 border-primary"
        titleClassName="text-text"
        descriptionClassName="text-text"
        title="Custom Title"
        description="This is an alert description. You can use this component to show alerts to users."
      />
    </View>
  )
};

export default Component;
