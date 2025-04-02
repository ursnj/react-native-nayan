import { useState } from 'react';
import {View} from 'react-native';
import { NButtonGroup } from 'react-native-nayan';

const Component = () => {
  const items = ["Startup", "Enterprise"];
  const [selected, setSelected] = useState(items[0] as string);
  return (
    <View className="flex-1 p-3">
      <NButtonGroup className="" items={items} value={selected} onChange={setSelected} label="Choose business type" />
    </View>
  )
};

export default Component;
