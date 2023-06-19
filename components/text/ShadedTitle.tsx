import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FlexRow, FontSize, Gray } from "../styling/constants";

const ShadedTitle = ({ title }: { title: string }) => {
  return (
    <View
      // className="flex flex-row justify-between w-full my-4 items-center bg-gray-100 p-3"
      style={{
        width: "100%",
        marginVertical: 16,
        backgroundColor: Gray[100],
        padding: 12,
        ...FlexRow,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        // className="text-sm text-gray-900"
        style={{
          ...FontSize.sm,
          color: Gray[900],
        }}
      >
        {title}
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        // className="mx-2"
        style={{
          marginHorizontal: 8,
        }}
      >
        <MaterialIcons name="refresh" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default ShadedTitle;
