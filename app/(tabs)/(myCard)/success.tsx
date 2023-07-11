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
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
      }}
    >
      <ExpoStatusBar
        animated
        networkActivityIndicatorVisible
        backgroundColor="#fff"
        style="auto"
      />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexDirection: "row",
          flexGrow: 1,
          marginTop: 30,
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <LottieView
            ref={animation}
            autoPlay
            loop={false}
            hardwareAccelerationAndroid
            onLayout={() => {
              animation.current?.play();
            }}
            style={{
              width: 70,
              height: 70,
            }}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require("./../../../assets/animations/check.json")}
          />
          <Text
            style={{
              ...FontSize.lg,
              fontFamily: Inter.extraBold,
              color: Green[600],
            }}
          >
            Redemption success
          </Text>
          <Text
            style={{
              ...FontSize["4xl"],
              marginVertical: 10,
              fontFamily: Inter.extraBold,
              color: Gray[800],
            }}
          >
            {txn.customerRedeemedAmount || "400"} Points
          </Text>
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 10,
          borderColor: Gray[400],
          margin: 20,
          padding: 20,
        }}
      >
        <Text
          style={{
            ...FontSize["lg"],
            textAlign: "center",
            marginVertical: 10,
            fontFamily: Inter.extraBold,
            color: Gray[800],
          }}
        >
          {txn.aldsStationName || "Total Gas Fuel Station"}
        </Text>
        <Detail title="ALDS ID" value={txn.aldsStationId || "FIE82984"} />
        <Detail title="Status" value="Success" />
      </View>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 10,
          borderColor: Gray[400],
          marginHorizontal: 20,
          marginVertical: 10,
          padding: 20,
        }}
      >
        <Text
          style={{
            ...FontSize["lg"],

            marginVertical: 10,
            fontFamily: Inter.extraBold,
            color: Gray[800],
          }}
        >
          Transaction Details
        </Text>
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

const styles = StyleSheet.create({});

const Detail = ({ title, value }: { title: string; value: string }) => {
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
