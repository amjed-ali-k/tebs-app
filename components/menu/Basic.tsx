import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { PNGIcon } from "../custom/Icons";
import { Gray } from "../styling/constants";

const MenuItem = ({
  icon,
  text,
  link,
  onPress,
}: {
  icon?:
    | "bonus"
    | "directions"
    | "expired"
    | "help"
    | "redemption"
    | "settings"
    | "transaction";
  text: string;
  link: string;
  onPress?: () => void;
}) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={onPress ? onPress : () => router.push(link)}
      activeOpacity={0.7}
      // className="flex flex-row py-5 border-b-2 items-center border-gray-200"
      style={{
        display: "flex",
        flexDirection: "row",
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: Gray[200],
        alignItems: "center",
      }}
    >
      {icon && (
        <PNGIcon
          icon={icon}
          // className="w-6 h-6 p-1"
          style={{
            width: 24,
            height: 24,
            padding: 4,
          }}
        />
      )}
      <Text
        // className="text-gray-800 mx-3 text-lg"
        style={{
          fontSize: 18,
          lineHeight: 28,
          // fontFamily: "Inter_500Medium",
          color: Gray[800],
          marginLeft: 12,
          marginRight: 12,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
