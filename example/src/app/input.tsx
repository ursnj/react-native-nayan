import {View} from 'react-native';
import { NInput } from 'react-native-nayan';
import { useState } from 'react';

const Component = () => {
  const [name, setName] = useState('');

  return (
    <View className="flex-1 justify-start items-center p-3">
      <NInput className="w-full" label="Full Name" value={name} onChangeText={setName} placeholder="Enter full name" />
    </View>
  )
};

export default Component;
