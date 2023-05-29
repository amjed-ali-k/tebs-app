import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <TouchableOpacity
        className="p-10 m-5 mt-14 border-2 bg-slate-50 border-gray-200 rounded-lg"
        onPress={() => router.push("home")}
      >
        <Text className="text-3xl font-interExtraBold text-red-600">
          View App
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;
