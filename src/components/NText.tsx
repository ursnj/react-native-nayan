import { Text } from 'react-native';

export const NText = (props: any) => {
  return <Text className={'text-blue-500 p-5 bg-red-200 rounded-full ' + props.className}>Sample</Text>;
};
