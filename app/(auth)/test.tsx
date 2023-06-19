import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MenuItem from "../../components/menu/Basic";
import { useAuth } from "../../context/auth";
import { Gray, Red } from "../../components/styling/constants";

const Account = () => {
  const ctx = useAuth();
  const signOut = () => ctx?.signOut();
  return (
    <View className="p-4">
      <TouchableOpacity
        activeOpacity={0.8}
        // className="border-2 border-gray-200 rounded-md bg-white my-4 p-4"
        style={{
          borderWidth: 2,
          borderColor: Gray[200],
          borderRadius: 8,
          backgroundColor: "#FFFFFF",
          marginTop: 16,
          marginBottom: 16,
          padding: 16,
        }}
      >
        <Text
          //   className="text-red-600 font-interBold text-xl"
          style={{
            fontSize: 24,
            lineHeight: 32,
            fontFamily: "Inter_700Bold",
            color: Red[600],
          }}
        >
          Amjed
        </Text>
        <Text
          //   className="text-gray-700 text-base"
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "Inter_500Medium",
            color: Gray[700],
          }}
        >
          View and edit profile
        </Text>
      </TouchableOpacity>
      <MenuItem icon="transaction" text="Transactions" link="--" />
      <MenuItem icon="redemption" text="Redemptions" link="--" />
      <MenuItem icon="bonus" text="Bonus points" link="--" />
      <MenuItem icon="expired" text="Expired points" link="--" />
      <MenuItem icon="redemption" text="Redeem a voucher" link="--" />
      <MenuItem icon="directions" text="App tour" link="--" />
      <MenuItem icon="help" text="Help" link="--" />
      <MenuItem icon="settings" text="Settings" link="--" />
      <MenuItem text="Legal" link="--" />
      <MenuItem text="Sign out" link="--" onPress={signOut} />
    </View>
  );
};

export default Account;
