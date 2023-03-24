import { Slot } from "expo-router";
import { View } from "react-native";
import BottomTab from "../../components/layout/BottomTab";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

export default function HomeLayout() {
  return (
    <View className="flex flex-col h-full">
      <View className="grow">
        <Slot />
      </View>
      <BottomTab />
    </View>
  );
}
