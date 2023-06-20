import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import SmallTitle from "../../../components/layout/SmallTitle";
import { Link } from "expo-router";
import OffersList from "../../../components/custom/OffersList";
import { MainTitle } from "../../../components/text/Title";
import { FlexRow, FontSize, Gray } from "../../../components/styling/constants";

const offers = () => {
  return (
    <View
      // className="p-4"
      style={{
        padding: 16,
      }}
    >
      <View
        // className="flex my-4 flex-row justify-between"
        style={{
          ...FlexRow,
          marginVertical: 16,
          justifyContent: "space-between",
        }}
      >
        <MainTitle>Offers</MainTitle>
        <View
          // className="flex flex-row"
          style={{ ...FlexRow }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            // className="mx-2"
            style={{
              marginHorizontal: 8,
            }}
          >
            <MaterialIcons name="refresh" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            // className="mx-2"
            style={{
              marginHorizontal: 8,
            }}
          >
            <AntDesign name="filter" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View
        // className="flex flex-row justify-between items-center"
        style={{
          ...FlexRow,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SmallTitle>MY AVAILABLE OFFERS</SmallTitle>
        <Link href="test" asChild>
          <TouchableOpacity>
            <Text
              // className="underline text-gray-500 text-sm"
              style={{ color: Gray[500], ...FontSize.sm }}
            >
              See All
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
      <OffersList extended />
    </View>
  );
};

export default offers;
