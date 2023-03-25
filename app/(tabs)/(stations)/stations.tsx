import { View, Text } from "react-native";
import React from "react";
import MapView from "react-native-maps";

const stations = () => {
  return (
    <View className="grow w-full flex">
      <MapView className="flex grow w-full" />
    </View>
  );
};

export default stations;
