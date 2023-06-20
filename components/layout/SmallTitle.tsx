import { Text } from "react-native";
import React from "react";
import { FontSize, Inter } from "../styling/constants";

export default function SmallTitle({ children }: { children: string }) {
  return (
    <Text
      // className="font-interBold uppercase text-sm my-3 mx-2"
      style={{
        fontFamily: Inter.bold,
        ...FontSize.sm,
        marginVertical: 12,
        marginHorizontal: 8,
      }}
    >
      {children}
    </Text>
  );
}
