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
  "http://punepreproduction.westindia.cloudapp.azure.com:105/api/v1/Customers/login/otp";

type ResType = {
  mobile: string;
  otpUniqueId: string;
  isNewUser: boolean;
};

export default function signIn() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View
      style={{
        backgroundColor: "#ed1a3a",
      }}
      className=" h-full w-full relative"
    >
      <StatusBar animated backgroundColor="#ed1a3a" style="light" />
      {isLoading && (
        <View className="absolute top-8 w-full">
          <Lottie
            style={{ height: 12 * 16, width: 12 * 16, alignSelf: "center" }}
            source={require("../../assets/s-loader.json")}
            autoPlay
            loop
          />
        </View>
      )}
      <TouchableOpacity activeOpacity={0.8}>
        <Ionicons name="arrow-back" size={24} color="#ed1a3a" className="m-6" />
      </TouchableOpacity>
      <View className="flex flex-col h-full justify-center items-center">
        <View className="flex flex-col items-center">
          <Text className="text-2xl mx-auto -mt-24 font-interExtraBold text-white ">
            Login
          </Text>
          <Text className="text-center text-rose-300/90 font-interMedium text-lg mb-8">
            Please sign in to continue
          </Text>
          <View>
            <View className="bg-white p-4 rounded-lg w-96 my-4 flex items-center flex-row">
              <Text className="text-4xl text-gray-800 mr-2 font-interBold ">
                +91
              </Text>
              {/* Mobile Number input */}
              <TextInput
                className="font-interBold text-4xl grow text-gray-800"
                placeholder="XXXXXXXXXX"
                keyboardType="phone-pad"
                onChange={(e) => setPhoneNumber(e.nativeEvent.text)}
                // autoCompleteType="tel"
                textContentType="telephoneNumber"
                maxLength={10}
                editable={!isLoading}
                placeholderTextColor={"#9CA3AF"}
                // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              />
            </View>
          </View>

          <View className="mx-auto w-96">
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
          {/* <View className="flex w-96 mb-4 flex-row justify-between">
            <Text className="text-xl my-2 text-white font-interMedium">
              New user
            </Text>
            <Text className="text-xl my-2 text-white font-interMedium ">
              Forgot Password
            </Text>
          </View> */}
        </View>
      </View>
    </View>
  );
}
