import { Text } from "react-native";
import { FontSize, Inter, Red } from "../styling/constants";

export function MainTitle({ children }: { children: string }) {
  return (
    <Text
      // className="font-interBold text-red-600 text-2xl my-3 mx-2"
      style={{
        fontFamily: Inter.bold,
        ...FontSize["2xl"],
        color: Red[600],
        marginVertical: 12,
        marginHorizontal: 8,
      }}
    >
      {children}
    </Text>
  );
}
