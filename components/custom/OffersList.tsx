import React from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import { Image } from "expo-image";
import ThemeButton from "../buttons/ThemeButton";

function ListItem({
  item,
}: {
  item: {
    image: any;
    title: string;
    subtitle: string;
  };
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex flex-col mx-2 w-96 h-[290] shadow-sm bg-white overflow-hidden rounded-lg"
    >
      <Image source={item.image} className="w-full h-56" contentFit="cover" />
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
  );
}

function ListItemExtended({
  item,
}: {
  item: {
    image: any;
    title: string;
    subtitle: string;
  };
}) {
  return (
    <View className="flex flex-col mx-2 w-96 h-[340] shadow-sm bg-white overflow-hidden rounded-lg">
      <Image source={item.image} className="w-full h-56" contentFit="cover" />
      <View className="flex flex-column m-4">
        <Text className="font-interBold mr-1 mb-4 text-xl">{item.title}</Text>

        <Text className="font-interMedium mb-3 text-gray-600 text-sm">
          Valid until {item.subtitle}
        </Text>
        <ThemeButton>Redeem now</ThemeButton>
      </View>
    </View>
  );
}

function OffersList({ extended = false }: { extended?: boolean }) {
  return (
    <FlatList
      horizontal
      className="grow-0"
      style={{ height: extended ? 350 : 300 }}
      data={[
        {
          image: require("./../../assets/ad-1.png"),
          title: "Total Rewards Program",
          subtitle: "31/12/2023",
        },
        {
          image: require("./../../assets/ad-2.png"),
          title: "Rs.300 Off on New Users",
          subtitle: "31/12/2023",
        },
        {
          image: require("./../../assets/ad-3.png"),
          title: "Rs.150 off on Rs.1000 purchase",
          subtitle: "31/12/2023",
        },
        {
          image: require("./../../assets/ad-4.png"),
          title: "Total Rewards Program",
          subtitle: "31/12/2023",
        },
        {
          image: require("./../../assets/ad-5.png"),
          title: "Total Rewards Program",
          subtitle: "31/12/2023",
        },
      ]}
      renderItem={extended ? ListItemExtended : ListItem}
    />
  );
}

export default OffersList;
