import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const ShadedTitle = ({ title }: { title: string }) => {
  return (
    <View className="flex flex-row justify-between w-full my-4 items-center bg-gray-100 p-3">
      <Text className="text-sm text-gray-900">{title}</Text>
      <TouchableOpacity activeOpacity={0.8} className="mx-2">
        <MaterialIcons name="refresh" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default ShadedTitle;
