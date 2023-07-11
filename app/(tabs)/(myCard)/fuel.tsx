import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  CustomerWalletResType,
  Transaction,
  generateCustomerBill,
  getCustomerWallet,
  redeemRewareds,
} from "../../../common/api";
import { Image } from "expo-image";
import {
  FlexRow,
  FontSize,
  Gray,
  Inter,
  Yellow,
} from "../../../components/styling/constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { useAuth } from "../../../context/auth";
import ThemeButton from "../../../components/buttons/ThemeButton";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Link, useRouter, useSearchParams } from "expo-router";
const fuel = () => {
  const [wallet, setWallet] = useState<CustomerWalletResType | null>(null);
  const [bill, setBill] = useState<Transaction | null>(null);
  const auth = useAuth();

  useEffect(() => {
    auth?.user?.mobile &&
      !wallet &&
      getCustomerWallet("9895581334").then((res) => {
        setWallet(res);
      });
  }, [auth?.user]);

  const { dispensorId } = useSearchParams<{ dispensorId?: string }>();

  useEffect(() => {
    dispensorId &&
      generateCustomerBill(dispensorId).then((res) => {
        setBill(res);
      });
  }, [dispensorId]);

  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  const router = useRouter();

  const [amount, setAmount] = useState<string>("0");

  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: Yellow[100],
        display: "flex",
        height: windowHeight,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ExpoStatusBar
        animated
        networkActivityIndicatorVisible
        backgroundColor="#063855"
        style="auto"
      />
      <Image
        source={require("../../../assets/bg-abstact.png")}
        contentFit="cover"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <View style={styles.cardContainer}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../../assets/gift-image.png")}
            style={{
              width: 100,
              height: 100,
              top: -70,

              marginHorizontal: "auto",
              position: "absolute",
            }}
          />
        </View>
        <View
          style={{
            // marginHorizontal: 30,
            marginTop: 50,
          }}
        >
          <View>
            <Text style={styles.pointsDescription}>Total</Text>
            <Text style={styles.pointsTitle}>
              {wallet?.walletDetails[0].amount}
            </Text>
            <Text style={styles.pointsDescription}>points remaining</Text>
          </View>
          <View>
            <View
              style={{
                backgroundColor: "#F9FAFB",
                padding: 16,
                borderRadius: 8,
                width: windowWidth / 1.5,
                marginTop: 16,
                ...FlexRow,
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  fontSize: 18,
                  lineHeight: 40,
                  fontFamily: Inter.extraBold,
                  color: "#4B5563",
                  flexGrow: 1,
                }}
                placeholder="Enter points to redeem"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                maxLength={10}
                placeholderTextColor={"#9CA3AF"}
                onChange={(e) => {
                  setAmount(e.nativeEvent.text);
                }}
              />
            </View>
          </View>
          <View
            style={{
              marginVertical: 20,
              width: windowWidth / 1.5,
            }}
          >
            <ThemeButton
              onPress={() => {
                redeemRewareds(bill?.id, parseInt(amount)).finally(() => {
                  router.push("displayQr");
                });
              }}
            >
              Redeem now
            </ThemeButton>
          </View>
          {/* <View>
            <Image
              source={require("../../../assets/total-cash-logo.png")}
              style={{ width: 100, height: 50 }}
            />
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default fuel;

const styles = StyleSheet.create({
  username: {
    color: Gray[100],
    ...FontSize["xl"],
    fontFamily: Inter.bold,
  },
  userid: {
    color: Gray[200],
    ...FontSize.lg,
    marginLeft: 5,
    fontFamily: Inter.bold,
  },
  pointsTitle: {
    fontSize: 45,
    fontFamily: Inter.extraBold,
    lineHeight: 50,
    textAlign: "center",
  },
  pointsEnd: {
    ...FontSize["2xl"],
    marginBottom: 8,
    fontFamily: Inter.bold,
    color: Gray[600],
  },
  pointsValue: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  pointsDescription: {
    ...FontSize.lg,
    fontFamily: Inter.bold,
    textAlign: "center",
    color: Gray[600],
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    // flexDirection: "row",
    // display: "flex",
    // justifyContent: "space-between",

    padding: 15,
    // borderColor: Gray[400],
    // borderWidth: 1,
  },
});
