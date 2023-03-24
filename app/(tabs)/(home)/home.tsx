import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";

const SmallTitle = ({ children }: { children: string }) => {
  return <Text className="font-interBold text-sm my-3 mx-2">{children}</Text>;
};

const HomeScreen = () => {
  return (
    <View className="grow px-2">
      <View className="mx-2 my-4">
        <Text className="text-red-600 font-interExtraBold text-3xl my-3">
          Hi Amjed
        </Text>
        <Text className="text-2xl font-interBold">Nice to see you again!</Text>
      </View>

      <View className="mx-2 border border-gray-200 shadow-sm bg-white rounded-xl my-4">
        <Image
          source={require("./../../../assets/stars.png")}
          className="w-[200] h-[100] absolute top-0 right-0"
        />
        <View className="p-4">
          <Text className="text-3xl font-interExtraBold text-red-600">
            0 Points
          </Text>
          <Text className="font-bold">We hope to see you soon</Text>
          <Text className="underline my-1 text-gray-500">View details</Text>
        </View>
        <View className="flex flex-row justify-between opacity-80  px-4 bg-gray-100 py-4">
          <Text className="text-lg font-interBold">
            Redeem your Loyalty Points
          </Text>
          <AntDesign name="right" size={15} />
        </View>
      </View>
      <View className="flex flex-row p-4 my-4 border border-gray-200 rounded-xl shadow-sm mx-2 bg-white items-center ">
        <Image
          source={require("./../../../assets/coin.png")}
          className="w-8 h-8"
        />
        <View className="flex flex-row mx-4">
          <Text className="font-interBold mr-1 text-xl">Refer a friend</Text>
          <Text className="font-interBold text-xl text-red-600">
            +250 points
          </Text>
        </View>
      </View>
      <SmallTitle>COMPLETE YOUR PROFILE</SmallTitle>

      <FlatList
        horizontal
        className="grow-0 h-36"
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
            className="flex flex-col mx-2 w-48 h-32 shadow-sm bg-gray-50  overflow-hidden rounded-lg"
          >
            <Image
              source={item.image}
              className="w-24 h-24 absolute -bottom-5 -right-2"
            />
            <View className="flex flex-column m-4">
              <Text className="font-interBold mr-1 text-xl">{item.title}</Text>
              <Text className="font-interBold text-xl">{item.subtitle}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <SmallTitle>FEATURED OFFEERS</SmallTitle>
      <FlatList
        horizontal
        className="grow-0 h-[300]"
        data={[
          {
            image: require("./../../../assets/ad-1.png"),
            title: "IOCL V-Power Rewards Program",
            subtitle: "31/12/2023",
          },
          {
            image: require("./../../../assets/ad-2.png"),
            title: "Rs.300 Off on New Users",
            subtitle: "31/12/2023",
          },
          {
            image: require("./../../../assets/ad-3.png"),
            title: "Rs.150 off on Rs.1000 purchase",
            subtitle: "31/12/2023",
          },
          {
            image: require("./../../../assets/ad-4.png"),
            title: "IOCL V-Power Rewards Program",
            subtitle: "31/12/2023",
          },
          {
            image: require("./../../../assets/ad-5.png"),
            title: "IOCL V-Power Rewards Program",
            subtitle: "31/12/2023",
          },
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            className="flex flex-col mx-2 w-96 h-[290] shadow-sm bg-white overflow-hidden rounded-lg"
          >
            <Image
              source={item.image}
              className="w-full h-56"
              contentFit="cover"
            />
            <View className="flex flex-column m-4">
              <Text className="font-interBold mr-1 text-xl">{item.title}</Text>
              <Text className="font-interMedium text-gray-400 my-2 text-xs">
                Shell
              </Text>
              <Text className="font-interMedium text-red-600 text-xs">
                Valid until {item.subtitle}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
