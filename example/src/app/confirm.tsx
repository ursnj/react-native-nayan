import {View} from 'react-native';
import { NButton, NConfirm, NToast } from 'react-native-nayan';

const Component = () => {
  return (
    <View className="flex-1 justify-center items-center p-3">
      <NConfirm
        title="Are you absolutly sure?"
        description="Doing this action is permanent and can't be undone. are you still want to continue?"
        onResult={(result) => NToast.success(result ? "Confirmed" : 'Rejected')}>
        <NButton>Confirm</NButton>
      </NConfirm>
    </View>
  )
};

export default Component;
