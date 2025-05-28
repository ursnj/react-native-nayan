import Toast, { BaseToast, ErrorToast, type ToastConfig } from 'react-native-toast-message';
import { useNTheme } from '@/hooks/useNTheme';

const toastConfig = (colors: any) => ({
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: colors.primary }}
      contentContainerStyle={{ paddingHorizontal: 10, backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border }}
      text2NumberOfLines={2}
      text1Style={{ height: 0 }}
      text2Style={{
        marginTop: -3,
        fontSize: 16,
        lineHeight: 25,
        color: colors.text
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: 'red' }}
      contentContainerStyle={{ paddingHorizontal: 10, backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border }}
      text2NumberOfLines={2}
      text1Style={{ height: 0 }}
      text2Style={{
        marginTop: -3,
        fontSize: 16,
        lineHeight: 25,
        color: colors.text
      }}
    />
  )
});

interface Props {
  config?: ToastConfig;
}

export const NToast = (props: Props) => {
  const { colors } = useNTheme();
  const { config = toastConfig(colors) } = props;

  return <Toast config={config} />;
};

NToast.show = Toast.show;
NToast.hide = Toast.hide;

NToast.success = (message: string) =>
  NToast.show({
    type: 'success',
    text2: message,
    position: 'bottom',
    bottomOffset: 50
  });

NToast.error = (message: string) =>
  NToast.show({
    type: 'error',
    text2: message,
    position: 'bottom',
    bottomOffset: 50
  });
