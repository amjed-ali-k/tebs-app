import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScannedCallback, BarCodeScanner } from "expo-barcode-scanner";
import { Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import AnimatedLottieView from "lottie-react-native";
import { FontSize, Gray, Inter } from "../../../components/styling/constants";

const qrCode = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const animation = useRef<AnimatedLottieView>(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned: BarCodeScannedCallback = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  const scale = windowHeight / windowWidth;

  return (
    <View style={{ ...styles.container, height: windowHeight }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{
          ...styles.scanner,
          height: windowHeight,
          transform: [{ scaleX: scale }, { scaleY: scale }],
        }}
      />
      <View>
        <View>
          <LottieView
            ref={animation}
            autoPlay
            hardwareAccelerationAndroid
            loop
            onLayout={() => {
              animation.current?.play();
            }}
            style={{
              width: windowWidth,
              height: windowWidth,
              //   backgroundColor: "#eee",
            }}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require("./../../../assets/animations/qr-scan-animation.json")}
          />
        </View>
        <View>
          <Text
            style={{
              color: Gray[100],
              ...FontSize["2xl"],
              fontFamily: Inter.bold,
              textAlign: "center",
            }}
          >
            Searching for QR
          </Text>
        </View>
      </View>

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

export default qrCode;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    height: "100%",
  },
  scanner: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",

    flexGrow: 1,
  },
});
