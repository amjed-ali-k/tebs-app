import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  CustomerWalletResType,
  Transaction,
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
import { useAuth } from "../../../context/auth";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Link, useRouter, useSearchParams } from "expo-router";
import QRCode from "react-qr-code";

const displayQr = () => {
  const router = useRouter();
  const { transactionId, amount } = useSearchParams<{
    transactionId?: string;
    amount?: string;
  }>();

  const [txn, setTxn] = useState<Transaction | null>(null);

  useEffect(() => {
    transactionId &&
      amount &&
      redeemRewareds(parseInt(transactionId), parseInt(amount)).then((res) => {
        setTxn(res);
      });
    setTimeout(() => {
      router.push({ pathname: "success", params: txn ? txn : undefined });
    }, 5000);
  }, [transactionId]);

  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;

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
            // marginHorizontal: 30,
            marginTop: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.pointsDescription}>
              Show this QR code to Marshall
            </Text>
            <QRCode value={txn?.transactionCode || "Test code"} />
          </View>

          <View
            style={{
              marginVertical: 20,
              width: windowWidth / 1.5,
            }}
          >
            <Text style={{ textAlign: "center" }}>
              Waiting for confirmation...
            </Text>
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

export default displayQr;

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
    marginVertical: 20,
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
