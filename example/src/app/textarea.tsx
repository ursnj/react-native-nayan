import {View} from 'react-native';
import { useState } from 'react';
import { NTextarea } from 'react-native-nayan';

const Component = () => {
  const [about, setAbout] = useState('');

  return (
    <View className="flex-1 justify-center items-center p-3">
      <NTextarea className="w-full" label="Say something about you." value={about} onChangeText={setAbout} />
    </View>
  )
};

export default Component;
