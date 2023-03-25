import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { PNGIcon } from "../custom/Icons";

const MenuItem = ({
  icon,
  text,
  link,
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
}) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push(link)}
      activeOpacity={0.7}
      className="flex flex-row py-5 border-b-2 items-center border-gray-200"
    >
      {icon && <PNGIcon icon={icon} className="w-6 h-6 p-1" />}
      <Text className="text-gray-800 mx-3 text-lg">{text}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
