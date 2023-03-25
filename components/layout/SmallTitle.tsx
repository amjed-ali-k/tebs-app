import { Text } from "react-native";
import React from "react";

export default function SmallTitle({ children }: { children: string }) {
  return (
    <Text className="font-interBold uppercase text-sm my-3 mx-2">
      {children}
    </Text>
  );
}
