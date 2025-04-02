import { useState } from 'react';
import {View} from 'react-native';
import { NCheck } from 'react-native-nayan';
const Component = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View className="flex-1 p-3">
      <NCheck label="By clicking this you have accepted all of our terms and conditions" checked={checked} onChange={setChecked} disabled={false} />
    </View>
  )
};

export default Component;
