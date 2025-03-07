import React from 'react';
import { Pressable, View } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import { NPopover } from '@/components/NPopover';
import { NText } from '@/components/NText';
import { cn } from '@/lib/utils';

interface Props {
  value: string;
  label?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export const NColorPicker = (props: Props) => {
  const { label = '', value = '#ffffff', disabled = false, onChange } = props;

  return (
    <View className="w-full flex flex-row justify-between items-center mb-3">
      {label && <NText className="mb-1 text-lg">{label}</NText>}
      <NPopover
        trigger={
          <Pressable
            className={cn('w-7 h-7 rounded border border-border', disabled && 'opacity-70')}
            style={{ backgroundColor: value }}
            disabled={disabled}
          />
        }>
        <View className="w-full">
          <ColorPicker
            color={value}
            swatchesLast={false}
            onColorChangeComplete={onChange}
            thumbSize={30}
            sliderSize={20}
            gapSize={10}
            noSnap={true}
            row={false}
            swatches={true}
            useNativeDriver={true}
          />
        </View>
      </NPopover>
    </View>
  );
};
