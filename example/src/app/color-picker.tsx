import { useState } from 'react';
import {View} from 'react-native';
import { NColorPicker } from 'react-native-nayan';

const Component = () => {
  const [color, setColor] = useState('#ffffff');

  return (
    <View className="flex-1 p-3">
      <NColorPicker label="Choose color" value={color} onChange={setColor} disabled={false} />
    </View>
  )
};

export default Component;
