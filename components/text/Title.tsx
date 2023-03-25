import { Text } from "react-native";

export function MainTitle({ children }: { children: string }) {
  return <Text className="font-interBold text-2xl my-3 mx-2">{children}</Text>;
}
