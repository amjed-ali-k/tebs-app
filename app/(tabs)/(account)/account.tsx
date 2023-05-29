import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MenuItem from "../../../components/menu/Basic";
import { useAuth } from "../../../context/auth";

const Account = () => {
  const ctx = useAuth();
  const signOut = () => ctx?.signOut();
  return (
    <View className="p-4">
      <TouchableOpacity
        activeOpacity={0.8}
        className="border-2 border-gray-200 rounded-md bg-white my-4 p-4"
      >
        <Text className="text-red-600 font-interBold text-xl">Amjed</Text>
        <Text className="text-gray-700 text-base">View and edit profile</Text>
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
