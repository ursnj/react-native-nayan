import * as React from "react";
import {
  GestureResponderEvent,
  Text,
  Pressable,
} from "react-native";

export interface ButtonProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <Pressable className="bg-green-500 p-3 rounded-full border-green-900" onPress={onClick}>
      <Text className="text-white bg-grren-500">{text}</Text>
    </Pressable>
  );
}