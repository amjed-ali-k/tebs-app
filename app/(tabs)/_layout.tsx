import { Slot } from "expo-router";
import { ScrollView, View } from "react-native";
import BottomTab from "../../components/layout/BottomTab";
import { SafeAreaView } from "react-native-safe-area-context";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

export default function HomeLayout() {
  return (
    <SafeAreaView className="relative flex flex-col h-full">
      <ScrollView className="grow">
        <Slot />
        <View className="my-14"></View>
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  );
}
