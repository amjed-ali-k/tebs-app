import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Transaction, generateCustomerBill } from "../../../common/api";
import { Image } from "expo-image";
import {
  FontSize,
  Gray,
  Inter,
  Yellow,
} from "../../../components/styling/constants";
import ThemeButton from "../../../components/buttons/ThemeButton";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useRouter, useSearchParams } from "expo-router";
import { useWallet } from "../../../common/hooks";
import { useAuth } from "../../../context/auth";

const fuel = () => {
  const [bill, setBill] = useState<Transaction | null>(null);
  const wallet = useWallet();
  const auth = useAuth();
  const { dispensorId } = useSearchParams<{ dispensorId?: string }>();
  // console.log(auth?.user?.accessToken);
  const router = useRouter();
  const [amount, setAmount] = useState<string>("0");

  const fetchBill = () => {
    dispensorId &&
      generateCustomerBill(dispensorId)
        .then((res) => {
          setBill(res);
        })
        .catch((err) => {
          console.log("Error in fetchBill");
          console.log(err);
        });
  };

  return (
    <View style={styles.screenContainer}>
      <ExpoStatusBar
        animated
        networkActivityIndicatorVisible
        backgroundColor={Gray[100]}
        style="auto"
      />
      <View style={styles.cardContainer}>
        <Image
          source={require("../../../assets/points-bg.png")}
          contentFit="cover"
          style={styles.cardBgImage}
        />
        <Text style={styles.cardTitle}>Points balance</Text>
        <View style={styles.cardPointsContainer}>
          <View style={styles.cardLogoContianer}>
            <Image
              source={require("../../../assets/total-cash-logo.png")}
              style={{
                width: 60,
                height: 20,
              }}
            />
          </View>
          <View>
            <Text style={styles.pointsNumber}>
              {wallet &&
              wallet.walletDetails &&
              wallet?.walletDetails?.length > 0
                ? wallet?.walletDetails[0].amount
                : 0}{" "}
              pts
            </Text>
            <Text style={styles.pointsBottomText}>
              can be redeemed right now
            </Text>
          </View>
        </View>
        <View style={styles.cardBottomContainer}>
          <Text style={styles.cardBottomText}>{auth?.user?.name}</Text>
          <Text style={styles.cardBottomText}>{auth?.user?.mobile}</Text>
        </View>
      </View>

      <View style={styles.welcomeContainer}>
        <Text style={styles.textMedium}>Welcome To</Text>
        <Text style={styles.billCardTitle}>Total Fuel Station</Text>
      </View>
      {bill && (
        <View style={styles.billCardContainer}>
          <Text style={styles.billTitle}>Bill Details</Text>
          <Detail
            title="Dispencer Id"
            value={bill?.dispensorId || "DKI299KLL"}
          />
          <Detail title="Bill amount" value={bill?.billAmount || "400"} />
          <Detail
            title="Customer Redeemed"
            value={bill?.customerRedeemedAmount || "400"}
          />
          <Detail
            title="Marshall Redeemed"
            value={bill?.marshallRedeemedAmount || "400"}
          />
          <Detail title="Total Paid" value={bill?.paidAmount || "400"} />
          <Detail
            title="Transaction Code"
            value={bill?.transactionCode || "FJDJ3223J2"}
          />
          <Detail title="Created By" value={bill?.createdBy || "QR-r400"} />
          <Detail
            title="Created At"
            value={bill?.createdAt || "2023-07-10T17:16:20.769Z"}
          />
          <Detail
            title="Dispensor ID"
            value={bill?.dispensorId || "KDLI32442"}
          />
          <Detail
            title="Transaction Code"
            value={bill?.transactionCode || "FJDJ3223J2"}
          />
        </View>
      )}

      {!bill && (
        <View style={styles.billCardContainer}>
          <Text style={styles.billCardTitle}>Get your latest bill</Text>
          <Text style={styles.billCardText}>
            When you press the below button, it will fetch your latest bill
          </Text>
          <ThemeButton onPress={fetchBill}>Get Bill</ThemeButton>
        </View>
      )}

      {bill && (
        <View style={styles.billCardContainer}>
          <Text style={styles.billCardTitle}>Redeem your points</Text>
          <Text style={styles.billCardText}>
            Enter the amount of points you want to redeem
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={amount}
              onChangeText={(text) => setAmount(text)}
              keyboardType="number-pad"
            />
            <Text style={styles.inputBottomText}>Points</Text>
          </View>
          <ThemeButton
            onPress={() => {
              router.push({
                pathname: "displayQr",
                params: {
                  transactionId: bill?.id,
                  amount: amount,
                },
              });
            }}
          >
            Redeem now
          </ThemeButton>
        </View>
      )}
    </View>
  );
};

export default fuel;

const Detail = ({ title, value }: { title: string; value: any }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          ...FontSize.base,
          //   fontFamily: Inter.bold,
          color: Gray[600],
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          ...FontSize.base,
          fontFamily: Inter.bold,
          color: Gray[800],
        }}
      >
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flexGrow: 1,
    backgroundColor: Gray[100],
    display: "flex",
    height: "100%",
    width: "100%",
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  pointsNumber: {
    fontSize: 30,
    fontFamily: Inter.extraBold,
    lineHeight: 30,
    textAlign: "left",
    color: Gray[100],
  },
  pointsBottomText: {
    ...FontSize.base,
    fontFamily: Inter.medium,
    marginTop: -2,
    textAlign: "left",
    color: Gray[600],
  },
  cardTitle: {
    color: Gray[100],
    marginBottom: 10,
    fontFamily: Inter.bold,
  },
  cardBottomContainer: {
    padding: 10,
    paddingBottom: 0,
    borderTopWidth: 1,
    borderTopColor: Gray[400],
    borderStyle: "dashed",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardBottomText: {
    color: Gray[600],
    fontFamily: Inter.bold,
  },
  cardBgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  cardContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 8,
    padding: 16,
    overflow: "hidden",
  },
  cardPointsContainer: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    flexDirection: "row",
  },
  cardLogoContianer: {
    borderRadius: 9999999,
    borderWidth: 3,
    borderColor: "rgba(0, 221, 16, 0.24)",
    width: 100,
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  billCardContainer: {
    backgroundColor: "#fff",
    padding: 40,
    paddingBottom: 20,
    width: "100%",
    borderRadius: 10,
    marginVertical: 5,
  },
  billCardTitle: {
    ...FontSize["2xl"],
    textAlign: "center",
    fontFamily: Inter.extraBold,
  },
  billCardText: {
    color: Gray[600],
    textAlign: "center",
    marginBottom: 20,
  },

  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  input: {
    ...FontSize["2xl"],
    fontFamily: Inter.extraBold,
    textAlign: "center",

    borderRadius: 10,
    borderWidth: 3,
    borderColor: Gray[600],
    padding: 10,
    marginRight: 10,
  },
  inputBottomText: {
    ...FontSize.base,
    fontFamily: Inter.medium,
    color: Gray[600],
  },
  textMedium: {
    color: Gray[600],
    textAlign: "center",
  },
  welcomeContainer: {
    marginTop: 20,
    marginBottom: 5,
  },
  billTitle: {
    ...FontSize["lg"],

    marginVertical: 10,
    fontFamily: Inter.extraBold,
    color: Gray[800],
  },
});
