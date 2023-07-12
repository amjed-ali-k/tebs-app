import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import SmallTitle from "../../../components/layout/SmallTitle";
import OffersList from "../../../components/custom/OffersList";
import { StatusBar } from "expo-status-bar";

import {
  FlexColumn,
  FlexRow,
  FontSize,
  Gray,
  Inter,
  Red,
  Shadow,
  White,
} from "../../../components/styling/constants";

import { useWallet } from "../../../common/hooks";
import { useAuth } from "../../../context/auth";

const HomeScreen = () => {
  const wallet = useWallet();
  const auth = useAuth();

  return (
    <View
      //   className="grow px-2"
      style={{
        flexGrow: 1,
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      <StatusBar animated backgroundColor="#ffffff" />

      <View
        //   className="mx-2 my-4"
        style={{
          marginLeft: 8,
          marginRight: 8,
          marginTop: 16,
          marginBottom: 16,
        }}
      >
        <Text
          //   className="text-red-600 font-interExtraBold text-3xl my-3"
          style={{
            ...FontSize["3xl"],
            fontFamily: Inter.extraBold,
            color: Red[600],
            marginBottom: 12,
            marginTop: 12,
          }}
        >
          Hi {auth?.user?.name || "User"}
        </Text>
        <Text
          //   className="text-2xl font-interBold"
          style={{
            ...FontSize["2xl"],
            fontFamily: Inter.bold,
          }}
        >
          Nice to see you again!
        </Text>
      </View>

      <View
        // className="mx-2 border border-gray-200 shadow-sm bg-white rounded-xl my-4"
        style={{
          marginLeft: 8,
          marginRight: 8,
          marginTop: 16,
          marginBottom: 16,
          borderWidth: 1,
          borderColor: Gray[200],
          backgroundColor: White,
          borderRadius: 16,
          overflow: "hidden",
          ...Shadow.sm,
        }}
      >
        <Image
          source={require("./../../../assets/stars.png")}
          //   className="w-[200] h-[100] absolute top-0 right-0"
          style={{
            width: 200,
            height: 100,
            position: "absolute",
            top: 0,
            right: 0,
          }}
        />
        <View
          //   className="p-4"
          style={{
            padding: 16,
          }}
        >
          <Text
            // className="text-3xl font-interExtraBold text-red-600"
            style={{
              ...FontSize["3xl"],
              fontFamily: Inter.extraBold,
              color: Red[600],
            }}
          >
            {wallet && wallet.totAmount ? wallet.totAmount : 0} Points
          </Text>
          {wallet && (
            <Text
              //   className="font-bold"
              style={{
                fontFamily: Inter.bold,
              }}
            >
              {wallet.totAmountAlloted} points earned today
            </Text>
          )}
          <Text
            //   className="underline my-1 text-gray-500"
            style={{
              //   fontFamily: Inter.bold,
              color: Gray[500],
              textDecorationLine: "underline",
              marginTop: 8,
              marginBottom: 8,
            }}
          >
            View details
          </Text>
        </View>
        <View
          //   className="flex flex-row justify-between opacity-80  px-4 bg-gray-100 py-4"
          style={{
            opacity: 0.8,
            padding: 16,
            backgroundColor: Gray[100],
            ...FlexRow,
            justifyContent: "space-between",
          }}
        >
          <Text
            //   className="text-lg font-interBold"
            style={{
              ...FontSize.lg,
              fontFamily: Inter.bold,
            }}
          >
            Redeem your Loyalty Points
          </Text>
          <AntDesign name="right" size={15} />
        </View>
      </View>
      <View
        // className="flex flex-row p-4 my-4 border border-gray-200 rounded-xl shadow-sm mx-2 bg-white items-center "
        style={{
          marginLeft: 8,
          marginRight: 8,
          marginTop: 16,
          marginBottom: 16,
          padding: 16,
          borderWidth: 1,
          borderColor: Gray[200],
          backgroundColor: White,
          borderRadius: 16,
          overflow: "hidden",
          ...Shadow.sm,
          ...FlexRow,
          alignItems: "center",
        }}
      >
        <Image
          source={require("./../../../assets/coin.png")}
          style={{
            width: 32,
            height: 32,
          }}
        />
        <View
          style={{
            ...FlexRow,
            marginLeft: 16,
            marginRight: 16,
          }}
        >
          <Text
            style={{ fontFamily: Inter.bold, ...FontSize.xl, marginRight: 4 }}
          >
            Refer a friend
          </Text>
          <Text
            style={{ fontFamily: Inter.bold, ...FontSize.xl, color: Red[600] }}
          >
            +250 points
          </Text>
        </View>
      </View>
      <SmallTitle>COMPLETE YOUR PROFILE</SmallTitle>

      <FlatList
        horizontal
        style={{
          flexGrow: 0,
          height: 144,
        }}
        data={[
          {
            image: require("./../../../assets/birthday.png"),
            title: "Add Birthday",
            subtitle: "+50 points",
          },
          {
            image: require("./../../../assets/mail.png"),
            title: "Add Email",
            subtitle: "+50 points",
          },
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              marginHorizontal: 8,
              width: 192,
              height: 128,
              ...Shadow.sm,
              backgroundColor: Gray[100],

              overflow: "hidden",
              borderRadius: 16,
              ...FlexColumn,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: 96,
                height: 96,
                position: "absolute",
                bottom: -20,
                right: -8,
              }}
            />
            <View
              style={{
                ...FlexColumn,
                margin: 16,
              }}
            >
              <Text
                style={{
                  fontFamily: Inter.bold,
                  ...FontSize.xl,
                  marginRight: 4,
                }}
              >
                {item.title}
              </Text>
              <Text style={{ fontFamily: Inter.bold, ...FontSize.xl }}>
                {item.subtitle}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <SmallTitle>FEATURED OFFEERS</SmallTitle>
      <OffersList />
    </View>
  );
};

export default HomeScreen;
