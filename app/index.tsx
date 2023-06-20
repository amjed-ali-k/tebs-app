import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <TouchableOpacity
        // style={{
        //   padding: "40px",
        //   margin: "20px",
        //   marginTop: "56px",
        //   borderWidth: 2,
        //   backgroundColor: "#F9FAFB",
        //   borderColor: "#E5E7EB",
        //   borderRadius: 8,
        // }}
        onPress={() => router.push("home")}
      >
        <Text
        // style={{
        //   fontSize: 30,
        //   lineHeight: 36,
        //   fontFamily: "Inter_800ExtraBold",
        //   color: "#DC2626",
        // }}
        >
          View App
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;
