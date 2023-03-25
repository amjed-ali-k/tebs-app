import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import SmallTitle from "../../../components/layout/SmallTitle";
import { Link } from "expo-router";
import OffersList from "../../../components/custom/OffersList";
import { MainTitle } from "../../../components/text/Title";

const offers = () => {
  return (
    <View className="p-4">
      <View className="flex my-4 flex-row justify-between">
        <MainTitle>Offers</MainTitle>
        <View className="flex flex-row">
          <TouchableOpacity activeOpacity={0.8} className="mx-2">
            <MaterialIcons name="refresh" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} className="mx-2">
            <AntDesign name="filter" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex flex-row justify-between items-center">
        <SmallTitle>MY AVAILABLE OFFERS</SmallTitle>
        <Link href="test" asChild>
          <TouchableOpacity>
            <Text className="underline text-gray-500 text-sm">See All</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <OffersList extended />
    </View>
  );
};

export default offers;
