import {View} from 'react-native';
import { NSelect } from 'react-native-nayan';
import { useState } from 'react';

const items = [
  {label: 'SMALL', value: 'SMALL'},
  {label: 'MEDIUM', value: 'MEDIUM'},
  {label: 'LARGE', value: 'LARGE'},
];

const Component = () => {
  const [type, setType] = useState('SMALL');

  return (
    <View className="flex-1 justify-center items-center p-3">
      <NSelect label="Choose business type" value={{ label: type, value: type }} items={items} onChange={setType} />
    </View>
  )
};

export default Component;
