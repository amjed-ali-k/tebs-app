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
      // className="bg-amber-400 rounded-md w-full py-4 flex items-center justify-center"
      style={{
        backgroundColor: "#FBBF24",
        borderRadius: 8,
        padding: 16,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      activeOpacity={0.8}
    >
      <Text
        // className="font-interBold text-base text-black"
        style={{
          fontSize: 16,
          lineHeight: 24,
          fontFamily: "Inter_800ExtraBold",
          color: "#000000",
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default ThemeButton;
