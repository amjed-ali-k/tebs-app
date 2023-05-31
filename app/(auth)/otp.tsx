import { Text, TextInput, View } from "react-native";
import { UserType, useAuth } from "../../context/auth";
import ThemeButton from "../../components/buttons/ThemeButton";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useSearchParams } from "expo-router";
import axios from "axios";
import Lottie from "lottie-react-native";
import { StatusBar } from "expo-status-bar";

const otpUrl =
  "http://punepreproduction.westindia.cloudapp.azure.com:105/api/v1/Customers/login/otp/validate";

const otpResend =
  "http://punepreproduction.westindia.cloudapp.azure.com:105/api/v1/Customers/login/otp/resend";

export type ResType = {
  name: string;
  mobile: string;
  accessToken: string;
  refreshToken: string;
  tenantId: number;
  cityId: number;
  userType: number;
};

export default function SignIn() {
  const ctx = useAuth();
  const signIn = (e: UserType) => ctx?.signIn(e);

  const [timeOut, setTimeOut] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);

  // const t = setTimeout(() => {
  //   if (timeOut > 0) setTimeOut(timeOut - 1);
  // }, 1000);

  useEffect(() => {
    const t = setInterval(() => {
      if (timeOut > 0) setTimeOut(timeOut - 1);
    }, 1000);

    return () => clearInterval(t);
  }, [timeOut]);

  const router = useRouter();

  const params = useSearchParams();

  const [otp, setOtp] = useState("");

  return (
    <View
      style={{
        backgroundColor: "#ed1a3a",
      }}
      className=" h-full w-full"
    >
      <StatusBar animated backgroundColor="#ed1a3a" style="light" />

      <TouchableOpacity onPress={() => router.back()} activeOpacity={0.8}>
        <Ionicons name="arrow-back" size={24} color="white" className="m-6" />
      </TouchableOpacity>
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
      <View className="flex flex-col h-full justify-center items-center">
        <View className="flex flex-col items-center">
          <Text className="text-2xl mx-auto -mt-24 font-interExtraBold text-white">
            Verify OTP
          </Text>
          <Text className="text-center text-rose-300/90 font-interMedium text-lg mb-8">
            Please type the OTP as shared on your mobile XXXX
            {params.mobile?.slice(-2)}
          </Text>
          <View>
            <View className="bg-white p-4 rounded-lg w-96 my-4 flex items-center flex-row">
              {/* Mobile Number input */}
              <TextInput
                className="font-interBold text-4xl grow text-gray-800"
                placeholder="OTP"
                keyboardType="phone-pad"
                // autoCompleteType="tel"
                textContentType="oneTimeCode"
                maxLength={6}
                onChange={(e) => setOtp(e.nativeEvent.text)}
                placeholderTextColor={"#9CA3AF"}
                editable={!isLoading}
                // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              />
            </View>
          </View>

          <View className="mx-auto w-96">
            <ThemeButton
              onPress={async () => {
                setIsLoading(true);
                const data = {};
                // const { data } = await axios.post<ResType>(otpUrl, {
                //   mobile: params.mobile,
                //   otpUniqueId: params.otpUniqueId,
                //   otpValue: otp,
                // });

                setIsLoading(false);
                const defaultData = {
                  name: "Test User",
                  mobile: params.mobile?.toString() || "9745814924",
                  accessToken: "asdffads",
                  cityId: 12,
                  tenantId: 32,
                  refreshToken: "asdfasdf",
                  userType: 1,
                };
                signIn({
                  ...defaultData,
                  ...data,
                  avatar: `https://i.pravatar.cc/300?u=${params.mobile}`,
                });
              }}
            >
              Sign In
            </ThemeButton>
          </View>

          <View>
            <Text className="text-xl mt-8 text-center text-white/80 font-interMedium">
              Didn't you recieve any code?
            </Text>
            {timeOut > 0 ? (
              <Text className="text-lg text-center text-white/60 font-interBold">
                Resend code in {timeOut} seconds
              </Text>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setIsResending(true);
                  axios
                    .post(otpResend, {
                      mobile: params.mobile,
                      otpUniqueId: params.otpUniqueId,
                    })
                    .then()
                    .finally(() => setIsResending(false));
                }}
                activeOpacity={0.6}
              >
                <Text className="text-lg text-center text-white font-interBold">
                  Resend code
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
