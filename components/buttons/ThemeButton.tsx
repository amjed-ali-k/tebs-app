import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";

const ThemeButton = ({
  children,
  ...props
}: { children: string } & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      {...props}
      className="bg-amber-400 rounded-md w-full py-4 flex items-center justify-center"
      activeOpacity={0.8}
    >
      <Text className="font-interBold text-base text-black">{children}</Text>
    </TouchableOpacity>
  );
};

export default ThemeButton;
