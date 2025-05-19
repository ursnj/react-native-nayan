import {View} from 'react-native';
import { NDatePicker } from 'react-native-nayan';

const Component = () => {
  return (
    <View className="flex-1 justify-start items-center p-3">
      <NDatePicker label="Pick Date" onChange={(value) => console.log(value)} value={new Date()} />
    </View>
  )
};

export default Component;
