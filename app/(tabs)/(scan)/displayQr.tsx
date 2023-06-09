import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Transaction, redeemRewareds } from "../../../common/api";
import { Image } from "expo-image";
import {
  FlexRow,
  FontSize,
  Gray,
  Inter,
  Red,
  Yellow,
} from "../../../components/styling/constants";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Link, useRouter, useSearchParams } from "expo-router";
import QRCode from "react-qr-code";
import { FontAwesome } from "@expo/vector-icons";
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
        console.log("Reward redeemed");
      });
  }, [transactionId]);

  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;

  const handleClose = () => {
    txn && router.push({ pathname: "success", params: txn });
  };

  return (
    <View
      style={{
        ...styles.container,
        height: windowHeight,
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
        style={styles.cardBgImage}
      />
      <View style={styles.cardContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.closeButtonContainer}
          onPress={handleClose}
        >
          <FontAwesome name="times" size={24} color="white" />
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <View style={styles.center}>
            <Text style={styles.pointsDescription}>
              Show this QR code to Marshall
            </Text>
            <QRCode
              value={
                "http://tebsdemoserver.westindia.cloudapp.azure.com:280/aldsmarshall/" +
                  txn?.userId.toString() || "Test code"
              }
            />
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
        </View>
      </View>
    </View>
  );
};

export default displayQr;

const styles = StyleSheet.create({
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
    padding: 15,
  },
  container: {
    flexGrow: 1,
    backgroundColor: Yellow[100],
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  cardBgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1000,
    backgroundColor: Red[500],
    borderRadius: 99999,
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
