import {View} from 'react-native';
import { NSwitch } from 'react-native-nayan';
import { useState } from 'react';

const Component = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View className="flex-1 justify-start items-center p-3">
      <NSwitch label="Is dark mode?" checked={checked} onChange={setChecked} disabled={false} />
    </View>
  )
};

export default Component;
