import { Slot } from "expo-router";
import { ScrollView, View } from "react-native";
import BottomTab from "../../components/layout/BottomTab";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

export default function HomeLayout() {
  return (
    <View className="relative flex flex-col h-full">
      <ScrollView className="grow">
        <Slot />
        <View className="my-14"></View>
      </ScrollView>
      <BottomTab />
    </View>
  );
}
