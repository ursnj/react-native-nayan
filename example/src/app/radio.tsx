import {View} from 'react-native';
import { NRadio } from 'react-native-nayan';
import { useState } from 'react';

const Component = () => {
  const [gender, setGender] = useState('MALE');

  return (
    <View className="flex-1 justify-center items-center p-3">
      <NRadio className="w-full" label="Select Gender" value={gender} items={[{value: 'MALE', label: 'MALE'}, {value: 'FEMALE', label: 'FEMALE'}]} onChange={setGender} />
    </View>
  )
};

export default Component;
