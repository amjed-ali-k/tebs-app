import { Text, TextInput, View } from "react-native";
import { UserType, useAuth } from "../../context/auth";
import ThemeButton from "../../components/buttons/ThemeButton";
import {
  FlexColumn,
  FlexRow,
  Inter,
  Red,
} from "../../components/styling/constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useSearchParams } from "expo-router";
import axios from "axios";
import Lottie from "lottie-react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

const otpUrl =
  "http://punepreproduction.westindia.cloudapp.azure.com:92/api/v1/Customers/login/otp/validate";

const otpResend =
  "http://punepreproduction.westindia.cloudapp.azure.com:92/api/v1/Customers/login/otp/resend";

export type ResType = {
  name: string;
  mobile: string;
  accessToken: string;
  refreshToken: string;
  tenantId: number;
  cityId: number;
  userType: number;
};
export default function otp() {
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
      //   className="bg-red-500 flex flex-col justify-center items-center h-full w-full"
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
        <Text className="text-2xl mx-auto -mt-24 font-interExtraBold text-white">
          Verify OTP
        </Text>
        <Text className="text-center text-rose-300/90 font-interMedium text-lg mb-8">
          Please type the OTP as shared on your mobile XXXX
          {params.mobile?.slice(-2)}
        </Text>
        <View>
          <View
            // className="bg-white p-4 rounded-lg w-96 my-4 flex items-center flex-row"
            style={{
              backgroundColor: "#F9FAFB",
              padding: 16,
              borderRadius: 8,
              width: 334,
              marginTop: 16,
              marginBottom: 16,
              ...FlexRow,
              alignItems: "center",
            }}
          >
            {/* Mobile Number input */}
            <TextInput
              //   className="font-interBold text-4xl grow text-gray-800"
              style={{
                fontSize: 36,
                lineHeight: 40,
                fontFamily: Inter.bold,
                color: "#4B5563",
                marginRight: 8,
                flexGrow: 1,
              }}
              placeholder="OTP"
              keyboardType="phone-pad"
              // autoCompleteType="tel"
              textContentType="oneTimeCode"
              maxLength={4}
              onChange={(e) => setOtp(e.nativeEvent.text)}
              placeholderTextColor={"#9CA3AF"}
              editable={!isLoading}
              // autoCompleteType="tel"
              // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            />
          </View>
        </View>

        <View
          //   className="mx-auto w-96"
          style={{
            width: 334,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <ThemeButton
            onPress={async () => {
              if (otp.length < 4) return alert("Please enter a valid OTP");
              setIsLoading(true);
              // const data = {};
              const { data } = await axios.post<ResType>(otpUrl, {
                mobile: params.mobile,
                otpUniqueId: params.otpUniqueId,
                otpValue: otp,
              });

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
