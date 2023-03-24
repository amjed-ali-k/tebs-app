import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  OpaqueColorValue,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useRouter, useSegments } from "expo-router";

const tabs: {
  name: string;
  link: string;
  styled?: boolean;
  icon: React.ComponentProps<typeof AntDesign>["name"];
}[] = [
  {
    name: "Home",
    link: "home",
    icon: "home",
  },
  {
    name: "Stations",
    link: "stations",
    icon: "bars",
  },
  {
    name: "My Card",
    link: "my-card",
    icon: "creditcard",
    styled: true,
  },
  {
    name: "Offers",
    link: "offers",
    icon: "tagso",
  },
  {
    name: "Account",
    link: "account",
    icon: "user",
  },
];

const TabIcon = ({
  name,
  color,
}: {
  name: React.ComponentProps<typeof AntDesign>["name"];
  color: string | OpaqueColorValue;
}) => {
  return <AntDesign name={name} size={24} color={color} />;
};

const BottomTab = () => {
  const seg = useSegments();
  const router = useRouter();
  return (
    <View className="flex flex-row -mt-[53px] w-full items-end justify-between p-3">
      {tabs.map((tab) => {
        const active = seg.includes(`(${tab.link})`);

        if (tab.styled) {
          return (
            <TouchableOpacity activeOpacity={0.9} key={tab.name}>
              <View className="w-28 flex bg-red-500 items-center justify-center h-28 border border-red-600 rounded-full">
                <TabIcon name={tab.icon} color="white" />
              </View>
            </TouchableOpacity>
          );
        }
        return (
          <TouchableOpacity
            onPress={() => {
              router.push(tab.link);
            }}
            key={tab.name}
            activeOpacity={0.6}
            className="grow"
          >
            <View className="flex flex-col border-t py-2 border-t-gray-200 justify-between items-center">
              <TabIcon name={tab.icon} color={active ? "red" : "#9ca3af"} />
              <Text className={`${active ? "text-red-600" : "text-gray-400"}`}>
                {tab.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTab;
