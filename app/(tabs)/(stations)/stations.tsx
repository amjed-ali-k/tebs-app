import { View, useWindowDimensions } from "react-native";
import React from "react";
import MapView from "react-native-maps";

const stations = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View
      // className="grow w-full flex"
      style={{
        flexGrow: 1,
        width: "100%",
        display: "flex",
        height: "100%",
        backgroundColor: "red",
      }}
    >
      <MapView
        // className="flex grow w-full"
        style={{
          // flexGrow: 1,
          width,
          // display: "flex",
          height,
        }}
      />
    </View>
  );
};

export default stations;
