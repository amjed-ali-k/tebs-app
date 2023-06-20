import React from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import { Image } from "expo-image";
import ThemeButton from "../buttons/ThemeButton";
import {
  FlexColumn,
  FontSize,
  Gray,
  Inter,
  Red,
  Shadow,
  White,
} from "../styling/constants";

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
      // className="flex flex-col mx-2 w-96 h-[290] shadow-sm bg-white overflow-hidden rounded-lg"
      style={{
        marginHorizontal: 8,
        width: 384,
        height: 320,
        ...Shadow.sm,
        backgroundColor: White,
        overflow: "hidden",
        borderRadius: 16,
        ...FlexColumn,
      }}
    >
      <Image
        source={item.image}
        // className="w-full h-56"
        style={{
          width: "100%",
          height: 224,
        }}
        contentFit="cover"
      />
      <View
        // className="flex flex-column m-4"
        style={{
          ...FlexColumn,
          margin: 16,
        }}
      >
        <Text
          // className="font-interBold mr-1 text-xl"
          style={{
            fontFamily: Inter.bold,
            ...FontSize.xl,
            marginRight: 4,
          }}
        >
          {item.title}
        </Text>
        <Text
          // className="font-interMedium text-gray-400 my-2 text-xs"
          style={{
            fontFamily: Inter.medium,
            ...FontSize.xs,
            color: Gray[400],
            marginHorizontal: 4,
          }}
        >
          Shell
        </Text>
        <Text
          // className="font-interMedium text-red-600 text-xs"
          style={{
            fontFamily: Inter.medium,
            ...FontSize.xs,
            color: Red[600],
          }}
        >
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
    <View
      // className="flex flex-col mx-2 w-96 h-[340] shadow-sm bg-white overflow-hidden rounded-lg"
      style={{
        ...FlexColumn,
        marginHorizontal: 8,
        width: 384,
        height: 390,
        ...Shadow.sm,
        backgroundColor: White,
        overflow: "hidden",
        borderRadius: 16,
      }}
    >
      <Image
        source={item.image}
        // className="w-full h-56"
        style={{
          width: "100%",
          height: 224,
        }}
        contentFit="cover"
      />
      <View
        // className="flex flex-column m-4"
        style={{
          ...FlexColumn,
          margin: 16,
        }}
      >
        <Text
          // className="font-interBold mr-1 mb-4 text-xl"
          style={{
            fontFamily: Inter.bold,
            ...FontSize.xl,
            marginRight: 4,
            marginBottom: 16,
          }}
        >
          {item.title}
        </Text>

        <Text
          // className="font-interMedium mb-3 text-gray-600 text-sm"
          style={{
            fontFamily: Inter.medium,
            ...FontSize.sm,
            color: Gray[600],
            marginBottom: 8,
          }}
        >
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
      // className="grow-0"
      style={{ height: extended ? 400 : 340, flexGrow: 0 }}
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
