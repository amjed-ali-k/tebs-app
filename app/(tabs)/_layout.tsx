import { Slot } from "expo-router";
import { ScrollView, View } from "react-native";
import BottomTab from "../../components/layout/BottomTab";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlexColumn } from "../../components/styling/constants";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

export default function HomeLayout() {
  return (
    <SafeAreaView
      // className="flex flex-col h-full"
      style={{
        ...FlexColumn,
        height: "100%",
      }}
    >
      <ScrollView
        // className="grow"
        style={{
          flexGrow: 1,
          width: "100%",
        }}
      >
        <Slot />
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  );
}
