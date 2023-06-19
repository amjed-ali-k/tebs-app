import { Slot } from "expo-router";
import { View } from "react-native";
import BottomTab from "../../components/layout/BottomTab";
import { FlexColumn } from "../../components/styling/constants";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

export default function HomeLayout() {
  return (
    <View
      // className="flex flex-col h-full"
      style={{
        ...FlexColumn,
        height: "100%",
      }}
    >
      <View
        // className="grow"
        style={{
          flexGrow: 1,
        }}
      >
        <Slot />
      </View>
      <BottomTab />
    </View>
  );
}
