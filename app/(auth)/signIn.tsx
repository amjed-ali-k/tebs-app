import { Text, TextInput, TouchableOpacity, View } from "react-native";

import ThemeButton from "../../components/buttons/ThemeButton";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { useState } from "react";
import { randomUUID } from "expo-crypto";
import Lottie from "lottie-react-native";

const loginUrl =
  "http://punepreproduction.westindia.cloudapp.azure.com:92/api/v1/Customers/login/otp";

type ResType = {
  mobile: string;
  otpUniqueId: string;
  isNewUser: boolean;
};
import {
  FlexColumn,
  FlexRow,
  FontSize,
  Inter,
  Red,
} from "../../components/styling/constants";

export default function SignIn() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View
      // className="bg-red-500 flex flex-col justify-center items-center h-full w-full"
      style={{
        backgroundColor: Red[500],
        height: "100%",
        // width: "100%",
        // flex: 1,
        ...FlexColumn,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity activeOpacity={0.8}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="#ed1a3a"
          style={{
            margin: 16,
          }}
        />
      </TouchableOpacity>
      <StatusBar animated backgroundColor="#ed1a3a" style="light" />
      {isLoading && (
        <View
          // className="absolute top-8 w-full"
          style={{
            position: "absolute",
            top: 32,
            width: "100%",
          }}
        >
          <Lottie
            style={{ height: 12 * 16, width: 12 * 16, alignSelf: "center" }}
            source={require("../../assets/s-loader.json")}
            autoPlay
            loop
          />
        </View>
      )}
      <Text
        // className="text-2xl mx-auto -mt-24 font-interExtraBold text-white mb-8"
        style={{
          fontSize: 24,
          lineHeight: 32,
          fontFamily: Inter.extraBold,
          color: "#F9FAFB",
          marginBottom: 56,
          marginTop: -96,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Login
      </Text>
      <Text
        // className="text-center text-rose-300/90 font-interMedium text-lg mb-8"
        style={{
          ...FontSize.lg,
          fontFamily: Inter.medium,
          color: Red[300],
          textAlign: "center",
          marginBottom: 32,
          opacity: 0.9,
        }}
      >
        Please sign in to continue
      </Text>
      <View>
        <View
          // className="bg-white p-4 rounded-lg w-96 my-4 flex items-center flex-row"
          style={{
            backgroundColor: "#F9FAFB",
            padding: 16,
            borderRadius: 8,
            width: 384,
            marginTop: 16,
            marginBottom: 16,
            ...FlexRow,
            alignItems: "center",
          }}
        >
          <Text
            // className="text-4xl text-gray-800 mr-2 font-interBold "
            style={{
              fontSize: 36,
              lineHeight: 40,
              fontFamily: Inter.extraBold,
              color: "#4B5563",
              marginRight: 8,
            }}
          >
            +91
          </Text>
          {/* Mobile Number input */}
          <TextInput
            // className="font-interBold text-4xl grow text-gray-800"
            style={{
              fontSize: 36,
              lineHeight: 40,
              fontFamily: Inter.extraBold,
              color: "#4B5563",
              flexGrow: 1,
            }}
            placeholder="XXXXXXXXXX"
            keyboardType="phone-pad"
            // autoCompleteType="tel"
            textContentType="telephoneNumber"
            maxLength={10}
            placeholderTextColor={"#9CA3AF"}
            onChange={(e) => {
              setPhoneNumber(e.nativeEvent.text);
            }}
            // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          />
        </View>
      </View>
      <View
        // className="mx-auto w-96"

        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: 384,
        }}
      >
        <ThemeButton
          onPress={async () => {
            if (phoneNumber.length !== 10)
              return alert("Please enter a valid phone number");
            setIsLoading(true);
            axios
              .post<ResType>(loginUrl, {
                mobile: phoneNumber,
                deviceId: `test-wallet-app-${randomUUID()}`,
              })
              .then(async ({ data }) => {
                await router.push({
                  pathname: "otp",
                  params: {
                    otpUniqueId: data.otpUniqueId,
                    mobile: data.mobile,
                    isNewUser: data.isNewUser,
                  },
                });
              })
              .finally(() => setIsLoading(false));
          }}
        >
          Send code
        </ThemeButton>
      </View>
    </View>
  );
}
