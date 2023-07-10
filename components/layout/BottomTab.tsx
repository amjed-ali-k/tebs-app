import { View, Text, TouchableOpacity, OpaqueColorValue } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useRouter, useSegments } from "expo-router";
import {
  FlexColumn,
  FlexRow,
  Gray,
  Inter,
  Red,
  White,
} from "../styling/constants";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
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
    name: "Scan QR",
    link: "qrCode",
    icon: "qrcode",
    styled: true,
  },
  {
    name: "My Card",
    link: "myCard",
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
  size = 24,
}: {
  name: React.ComponentProps<typeof AntDesign>["name"];
  color: string | OpaqueColorValue;
  size?: number;
}) => {
  return <AntDesign name={name} size={size} color={color} />;
};

const BottomTab = () => {
  const seg = useSegments();
  const router = useRouter();
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View
      // className="flex flex-row -mt-[53px] w-full items-end justify-between p-3"
      style={{
        width: "100%",
        marginTop: -65,
        ...FlexRow,
        justifyContent: "space-between",
        padding: 12,
        alignItems: "flex-end",
        zIndex: 100,
      }}
    >
      {tabs.map((tab) => {
        const active = seg.includes(`(${tab.link})`);

        if (tab.styled) {
          return (
            <TouchableOpacity
              onPress={() => {
                router.push(tab.link);
              }}
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
              activeOpacity={0.9}
              key={tab.name}
            >
              <View
                style={{
                  width: isPressed ? 113 : 112,
                  height: isPressed ? 113 : 112,
                  borderRadius: 56,
                  backgroundColor: isPressed ? Red[400] : Red[500],
                  ...FlexColumn,
                  borderColor: Red[600],
                  borderWidth: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                // className="flex bg-red-500 items-center justify-center border border-red-600 rounded-full"
              >
                <TabIcon name={tab.icon} color="white" size={27} />
                <Text
                  // className="text-white font-interMedium"
                  style={{
                    fontFamily: Inter.medium,
                    color: White,
                  }}
                >
                  Scan QR
                </Text>
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
            // className="grow"
            style={{
              flexGrow: 1,
            }}
          >
            <View
              // className="flex flex-col border-t py-2 border-t-gray-200 justify-between items-center"
              style={{
                ...FlexColumn,
                paddingVertical: 8,
                borderTopColor: Gray[200],
                justifyContent: "space-between",
                alignItems: "center",
                borderTopWidth: 1,
              }}
            >
              {/* <MaterialCommunityIcons
                name="qrcode-scan"
                color={active ? "red" : "#9ca3af"}
              /> */}
              <TabIcon name={tab.icon} color={active ? "red" : "#9ca3af"} />
              <Text
                // className={`${active ? "text-red-600" : "text-gray-400"}`}
                style={{
                  color: active ? Red[600] : Gray[400],
                }}
              >
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
