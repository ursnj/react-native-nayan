import {View} from 'react-native';
import { NButton, NSheet, NText } from 'react-native-nayan';
import { useRef } from 'react';

const Component = () => {
  const sheetRef = useRef();

  return (
    <View className="flex-1 justify-center items-center p-3">
      <NSheet sheetRef={sheetRef}>
        <View className="p-3">
          <NText>Sample sheet content.</NText>
        </View>
      </NSheet>
      <NButton onPress={() => sheetRef.current?.present()}>Open Sheet</NButton>
    </View>
  )
};

export default Component;
