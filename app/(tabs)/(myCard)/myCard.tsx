import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { MainTitle } from "../../../components/text/Title";
import { Image } from "expo-image";
import QRCode from "react-native-qrcode-svg";
import Svg, { Defs, G, Mask, Path, Rect } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import ShadedTitle from "../../../components/text/ShadedTitle";
import { PNGIcon, PngIconType } from "../../../components/custom/Icons";
import axiosApiInstance from "../../../context/axios";
import axios from "axios";

export type CouponType = {
  couponId: number;
  couponName: string;
  couponCode: string;
  couponType: number;
  referrerAmount: number;
  referreeAmount: number;
  fromDate: Date;
  toDate: Date;
  maxTries: number;
  isActive: boolean;
  tenantId: number;
  tenantUID: string;
  branchId: number;
  createdAt: Date;
  updatedAt: Date;
  firstTime: boolean;
  refererCouponId: number;
  fundId: number;
};
import {
  FlexColumn,
  FlexRow,
  FontSize,
  Gray,
  Indigo,
  Inter,
  Orange,
  Shadow,
  White,
} from "../../../components/styling/constants";

const RewardItem = ({
  id,
  title,
  validity,
  selected,
  onSelect,
  code,
  icon,
}: {
  id: string;
  title: string;
  validity: string;
  selected?: boolean;
  onSelect?: (id: string) => void;
  icon: PngIconType;
  code?: string;
}) => {
  return (
    <View
      // className="flex border-b border-gray-200 py-2 flex-row items-center justify-between w-full"
      style={{
        ...FlexRow,
        borderBottomColor: Gray[200],
        paddingVertical: 8,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        width: "100%",
      }}
    >
      <PNGIcon
        icon={icon}
        // className="w-6 h-6 m-3"
        style={{
          width: 32,
          height: 32,
          margin: 12,
        }}
      />

      <View
        // className="mx-2 grow"
        style={{
          flexGrow: 1,
          marginHorizontal: 8,
        }}
      >
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                flex: 1,
                flexWrap: "wrap",
                fontFamily: Inter.bold,
                ...FontSize.lg,
              }}
              // className="font-interBold text-lg"
            >
              {title}
            </Text>
          </View>
        </View>
        <Text
          // className="text-gray-500"
          style={{
            color: Gray[500],
          }}
        >
          Valid Until {validity}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => onSelect && onSelect(id)}
        activeOpacity={0.8}
        // className={`border shrink-0 items-center rounded-md shadow-sm flex w-32 px-2 py-1 flex-row border-indigo-900 ${selected ? "bg-indigo-900" : "bg-white"
        //   }`}

        style={{
          borderWidth: 1,
          flexShrink: 0,
          alignItems: "center",
          borderRadius: 6,
          ...Shadow.sm,
          backgroundColor: selected ? Indigo[900] : White,
          borderColor: selected ? Indigo[900] : Gray[200],
          paddingVertical: 4,
          paddingHorizontal: 8,
          width: 105,
          ...FlexRow,
        }}
      >
        {selected ? (
          <>
            <AntDesign
              name="check"
              // className="mr-1"
              style={{ marginRight: 4 }}
              size={18}
              color="white"
            />
            <Text
              // className="text-gray-100 font-interBold"
              style={{
                fontFamily: Inter.bold,
                color: Gray[100],
              }}
            >
              Selected
            </Text>
          </>
        ) : (
          <>
            <AntDesign
              name="plus"
              // className="mr-1"
              style={{ marginRight: 4 }}
              size={18}
              color="rgb(49 46 129)"
            />
            <Text
              // className="text-indigo-900 font-interBold"
              style={{
                fontFamily: Inter.bold,
                color: Indigo[900],
              }}
            >
              Select
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const rewards: {
  id: string;
  title: string;
  validity: string;
  icon: PngIconType;
}[] = [
  {
    id: "1",
    title: "Total Energy Rewards Program",
    validity: "1/12/2023",
    icon: "redemption",
  },
  {
    id: "2",
    title: "Rs 25 off on every Rs 100 fill of Total Petrol",
    validity: "1/12/2023",
    icon: "redemption",
  },
  {
    id: "3",
    title: "Get Rs 10 off on Rs 300 fill of Total Petrol",
    validity: "1/12/2023",
    icon: "redemption",
  },
  {
    id: "4",
    title: "Saturday offer - Get 100 bonus points with PwD card",
    validity: "1/12/2023",
    icon: "bonus",
  },
];

const coupons: {
  id: string;
  title: string;
  validity: string;
  icon: PngIconType;
  code: string;
}[] = [
  {
    id: "1",
    title: "50% off upto Rs.149",
    validity: "1/12/2023",
    icon: "coupon",
    code: "TOTAL50",
  },
  {
    id: "2",
    title: "Rs 25 off on every Rs 100 fill of Total Petrol",
    validity: "1/12/2023",
    icon: "coupon",
    code: "TOTAL25",
  },
  {
    id: "3",
    title: "Get Rs 10 off on Rs 300 fill of Total Petrol",
    validity: "1/12/2023",
    icon: "coupon",
    code: "TOTAL10",
  },
];

export default function MyCard() {
  const [selectedRewards, setSelectedRewards] = React.useState<string[]>([]);

  const [coupons, setCoupons] = useState<CouponType[] | null>(null);

  useEffect(() => {
    axios
      .get<CouponType[]>(
        "https://prewallet.tebs.co.in/api/v1/Coupon/GetAllCoupons?tenantUID=EasyGasIndia&branchID=0"
      )
      .then(({ data }) => {
        setCoupons(data);
      });
  }, []);

  return (
    <View>
      <View
        // className="p-4"
        style={{
          padding: 16,
        }}
      >
        <MainTitle>Your Total+ Card</MainTitle>
        <View
          // className="overflow-hidden border flex flex-col border-amber-200 rounded-lg relative"
          style={{
            overflow: "hidden",
            borderWidth: 1,
            borderColor: Orange[200],
            borderRadius: 8,
            position: "relative",
            ...FlexColumn,
          }}
        >
          <Svg
            // className="absolute inset-0 w-full"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 1440 560"
          >
            <G mask='url("#SvgjsMask1001")' fill="none">
              <Rect width="1440" height="560" x="0" y="0" fill="#ffd404"></Rect>
              <Path
                d="M0,559.328C107.241,572.658,215.207,534.734,306.938,477.606C399.479,419.974,489.906,341.93,518.155,236.633C545.374,135.176,458.404,39.817,452.525,-65.063C445.797,-185.094,561.786,-327.741,481.503,-417.225C400.682,-507.308,246.9,-424.093,125.976,-429.036C38.897,-432.596,-42.95,-448.888,-129.846,-442.215C-238.346,-433.883,-369.294,-463.804,-444.573,-385.225C-519.43,-307.086,-474.736,-177.515,-486.48,-69.945C-497.739,33.186,-556.426,140.069,-512.166,233.898C-467.958,327.618,-348.99,351.373,-261.529,406.946C-174.611,462.174,-102.194,546.626,0,559.328"
                fill="#fcbc04"
              ></Path>
              <Path
                d="M1440 1119.617C1543.381 1109.298 1588.96 983.469 1672.137 921.213 1747.309 864.948 1849.0729999999999 847.9639999999999 1904.349 772.061 1965.395 688.236 2004.346 583.563 1993.104 480.476 1981.719 376.077 1918.143 284.182 1843.128 210.687 1771.815 140.81900000000002 1680.025 94.71100000000001 1581.701 77.40899999999999 1489.666 61.214 1402.324 103.17899999999997 1309.881 116.85500000000002 1199.2930000000001 133.216 1059.298 82.21199999999999 984.947 165.695 910.825 248.92200000000003 964.175 382.169 974.784 493.11199999999997 983.1379999999999 580.4639999999999 1006.0450000000001 661.755 1040.1190000000001 742.62 1075.199 825.873 1110.304 908.759 1176.039 970.732 1251.062 1041.461 1337.403 1129.858 1440 1119.617"
                fill="#fce404"
              ></Path>
            </G>
            <Defs>
              <Mask id="SvgjsMask1001">
                <Rect width="1440" height="560" fill="#ffffff"></Rect>
              </Mask>
            </Defs>
          </Svg>
          <View
            // className="p-7 grow pb-2 flex flex-row  justify-between"
            style={{
              padding: 28,
              paddingBottom: 8,
              ...FlexRow,
              justifyContent: "space-between",
              flexGrow: 1,
            }}
          >
            <Image
              source={require("./../../../assets/icons/help.png")}
              // className="w-8 h-8"
              style={{
                width: 32,
                height: 32,
              }}
            />
            <View
              // className="bg-white rounded-md p-5"
              style={{
                backgroundColor: White,
                borderRadius: 6,
                padding: 20,
              }}
            >
              <QRCode value="http://awesome.link.qr" />
            </View>
            <Image
              source={require("./../../../assets/icons/help.png")}
              // className="w-8 h-8"
              style={{
                width: 32,
                height: 32,
              }}
            />
          </View>

          <View
            // className="flex flex-row justify-between"
            style={{
              ...FlexRow,
              justifyContent: "space-between",
            }}
          >
            <View
              // className="p-4"
              style={{
                padding: 16,
              }}
            >
              <Text
                // className="text-center font-interExtraBold text-3xl"
                style={{
                  fontFamily: Inter.extraBold,
                  ...FontSize["3xl"],
                  textAlign: "center",
                }}
              >
                6000
              </Text>
              <Text
                // className="font-interBold text-gray-900/50"
                style={{
                  fontFamily: Inter.bold,
                  color: Gray[900],
                  opacity: 0.5,
                }}
              >
                Alloted points
              </Text>
            </View>
            <View
              // className="p-4"
              style={{
                padding: 16,
              }}
            >
              <Text
                // className="text-center font-interExtraBold text-3xl"
                style={{
                  fontFamily: Inter.extraBold,
                  textAlign: "center",
                  ...FontSize["3xl"],
                }}
              >
                1500
              </Text>
              <Text
                // className="font-interBold text-gray-900/50"
                style={{
                  fontFamily: Inter.bold,
                  color: Gray[900],
                  opacity: 0.5,
                }}
              >
                Active points
              </Text>
            </View>
            <View
              // className="p-4"
              style={{
                padding: 16,
              }}
            >
              <Text
                // className="text-center font-interExtraBold text-3xl"
                style={{
                  fontFamily: Inter.extraBold,
                  textAlign: "center",
                  ...FontSize["3xl"],
                }}
              >
                4000
              </Text>
              <Text
                // className="font-interBold text-gray-900/50"
                style={{
                  fontFamily: Inter.bold,
                  color: Gray[900],
                  opacity: 0.5,
                }}
              >
                Used points
              </Text>
            </View>
          </View>
          <View
            // className="relative rounded-lg overflow-hidden"
            style={{
              position: "relative",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <View
              // className="absolute bg-white opacity-40 inset-0 w-full h-full"
              style={{
                position: "absolute",
                backgroundColor: White,
                opacity: 0.4,
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></View>
            <View
              // className="p-3 flex flex-row justify-between items-center"
              style={{
                padding: 12,
                ...FlexRow,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text
                  // className="font-interBold text-lg"
                  style={{
                    fontFamily: Inter.bold,
                    ...FontSize.lg,
                  }}
                >
                  Selected rewards:
                </Text>
                <Text
                  // className="text-gray-700"
                  style={{
                    color: Gray[700],
                  }}
                >
                  Show QR above to process your rewards
                </Text>
              </View>
              <Text
                // className="font-interExtraBold text-4xl text-gray-700"
                style={{
                  fontFamily: Inter.extraBold,
                  ...FontSize["4xl"],
                  color: Gray[700],
                }}
              >
                {selectedRewards.length}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        {coupons && coupons.length > 0 && (
          <>
            <ShadedTitle title="Your Coupons" />
            <View
              // className="p-4"
              style={{
                padding: 16,
              }}
            >
              {coupons.map((coupon) => (
                <RewardItem
                  key={coupon.couponId}
                  icon="coupon"
                  title={coupon.couponName}
                  code={coupon.couponCode}
                  validity={`${new Date(coupon.toDate).toLocaleDateString()}`}
                  id={coupon.couponId.toString()}
                />
              ))}
            </View>
          </>
        )}

        <ShadedTitle title="Your Rewards" />
        <View
          // className="p-4"
          style={{
            padding: 16,
          }}
        >
          {rewards.map((reward) => (
            <RewardItem
              key={reward.id}
              {...reward}
              selected={selectedRewards.includes(reward.id)}
              onSelect={(id) => {
                if (selectedRewards.includes(id)) {
                  setSelectedRewards(selectedRewards.filter((i) => i !== id));
                } else {
                  setSelectedRewards([...selectedRewards, id]);
                }
              }}
            />
          ))}
        </View>
        <ShadedTitle title="Gift catalogue" />
        <View
          // className="flex border-b border-gray-200 py-2 flex-row items-center justify-between w-full"
          style={{
            ...FlexRow,
            borderBottomColor: Gray[200],
            paddingVertical: 8,
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 1,
            width: "100%",
          }}
        >
          <PNGIcon
            icon={"redemption"}
            // className="w-6 h-6 m-6"
            style={{
              width: 24,
              height: 24,
              margin: 24,
            }}
          />

          <View
            // className="mx-2 grow"
            style={{
              flexGrow: 1,
              marginHorizontal: 8,
            }}
          >
            <View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    flex: 1,
                    flexWrap: "wrap",
                    fontFamily: Inter.bold,
                    ...FontSize.sm,
                  }}
                  // className="font-interMedium text-sm"
                >
                  Enjoy your redeemed items. Keep using your IOCL Plus card to
                  add more offers along the way.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
