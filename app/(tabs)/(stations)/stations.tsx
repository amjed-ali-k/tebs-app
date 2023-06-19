import { View } from "react-native";
import React from "react";
import MapView from "react-native-maps";

const stations = () => {
  return (
    <View
      // className="grow w-full flex"
      style={{
        flexGrow: 1,
        width: "100%",
        display: "flex",
      }}
    >
      <MapView
        // className="flex grow w-full"
        style={{
          flexGrow: 1,
          width: "100%",
          display: "flex",
        }}
      />
    </View>
  );
};

export default stations;
