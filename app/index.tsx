import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Button title="Home" onPress={() => router.push("home")}></Button>
    </SafeAreaView>
  );
};

export default index;
