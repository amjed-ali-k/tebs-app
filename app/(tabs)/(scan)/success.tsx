import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import AnimatedLottieView from "lottie-react-native";
import {
  FontSize,
  Gray,
  Green,
  Inter,
  Shadow,
} from "../../../components/styling/constants";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useSearchParams } from "expo-router";
import { Transaction } from "../../../common/api";

type TxnType = { [K in keyof Transaction]: string };

const success = () => {
  const animation = useRef<AnimatedLottieView>(null);
  const txn = useSearchParams<TxnType>();
  console.log(txn);
  return (
    <View style={styles.container}>
      <ExpoStatusBar
        animated
        networkActivityIndicatorVisible
        backgroundColor="#fff"
        style="auto"
      />
      <View style={styles.animatedContainer}>
        <View style={styles.centerCol}>
          <LottieView
            ref={animation}
            autoPlay
            loop={false}
            hardwareAccelerationAndroid
            onLayout={() => {
              animation.current?.play();
            }}
            style={styles.animation}
            source={require("./../../../assets/animations/check.json")}
          />
          <Text style={styles.successMessage}>Redemption success</Text>
          <Text style={styles.pointsText}>
            {txn.customerRedeemedAmount || "400"} Points
          </Text>
        </View>
      </View>
      <View style={styles.firstCardContainer}>
        <Text style={styles.bigTitle}>
          {txn.aldsStationName || "Total Gas Fuel Station"}
        </Text>
        <Detail title="ALDS ID" value={txn.aldsStationId || "FIE82984"} />
        <Detail title="Status" value="Success" />
      </View>
      <View style={styles.detailsCardContainer}>
        <Text style={styles.detailsCardTitle}>Transaction Details</Text>
        <Detail title="Dispencer Id" value={txn.dispensorId || "DKI299KLL"} />
        <Detail title="Bill amount" value={txn.billAmount || "400"} />
        <Detail
          title="Customer Redeemed"
          value={txn.customerRedeemedAmount || "400"}
        />
        <Detail
          title="Marshall Redeemed"
          value={txn.marshallRedeemedAmount || "400"}
        />
        <Detail title="Total Paid" value={txn.paidAmount || "400"} />
        <Detail
          title="Transaction Code"
          value={txn.transactionCode || "FJDJ3223J2"}
        />
        <Detail title="Created By" value={txn.createdBy || "QR-r400"} />
        <Detail
          title="Created At"
          value={txn.createdAt || "2023-07-10T17:16:20.769Z"}
        />
        <Detail title="Dispensor ID" value={txn.dispensorId || "KDLI32442"} />
        <Detail
          title="Transaction Code"
          value={txn.transactionCode || "FJDJ3223J2"}
        />
      </View>
    </View>
  );
};

export default success;

const Detail = ({ title, value }: { title: string; value: string }) => {
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailLeft}>{title}</Text>
      <Text style={styles.detailRight}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailLeft: {
    ...FontSize.base,
    color: Gray[600],
  },
  detailRight: {
    ...FontSize.base,
    fontFamily: Inter.bold,
    color: Gray[800],
  },
  centerCol: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  bigTitle: {
    ...FontSize["lg"],
    textAlign: "center",
    marginVertical: 10,
    fontFamily: Inter.extraBold,
    color: Gray[800],
  },
  firstCardContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Gray[400],
    margin: 20,
    padding: 20,
  },
  pointsText: {
    ...FontSize["4xl"],
    marginVertical: 10,
    fontFamily: Inter.extraBold,
    color: Gray[800],
  },
  successMessage: {
    ...FontSize.lg,
    fontFamily: Inter.extraBold,
    color: Green[600],
  },
  animation: {
    width: 70,
    height: 70,
  },
  animatedContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    flexGrow: 1,
    marginTop: 30,
  },
  detailsCardContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Gray[400],
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
  },
  detailsCardTitle: {
    ...FontSize["lg"],
    marginVertical: 10,
    fontFamily: Inter.extraBold,
    color: Gray[800],
  },
  container: {
    display: "flex",
    flex: 1,
  },
});
