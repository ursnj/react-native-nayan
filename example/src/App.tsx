import '../global.css';
import { NText } from 'react-native-nayan';
import { View, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <NText />
      <Text className="text-green-500">Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
