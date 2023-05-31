import { StatusBar, Text, TextInput, View } from "react-native";
import { UserType, useAuth } from "../../context/auth";
import ThemeButton from "../../components/buttons/ThemeButton";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SignIn() {
  const ctx = useAuth();
  const signIn = (e: UserType) => ctx?.signIn(e);

  const [timeOut, setTimeOut] = useState(10);

  setTimeout(() => {
    if (timeOut > 0) setTimeOut(timeOut - 1);
  }, 1000);

  const router = useRouter();

  return (
    <View
      style={{
        backgroundColor: "#ed1a3a",
      }}
      className=" h-full w-full"
    >
      <StatusBar animated backgroundColor="#ed1a3a" />

      <TouchableOpacity onPress={() => router.back()} activeOpacity={0.8}>
        <Ionicons name="arrow-back" size={24} color="white" className="m-6" />
      </TouchableOpacity>

      <View className="flex flex-col h-full justify-center items-center">
        <View className="flex flex-col items-center">
          <Text className="text-2xl mx-auto -mt-24 font-interExtraBold text-white">
            Verify OTP
          </Text>
          <Text className="text-center text-rose-300/90 font-interMedium text-lg mb-8">
            Please type the OTP as shared on your mobile XXXXXXXX32
          </Text>
          <View>
            <View className="bg-white p-4 rounded-lg w-96 my-4 flex items-center flex-row">
              {/* Mobile Number input */}
              <TextInput
                className="font-interBold text-4xl grow text-gray-800"
                placeholder="OTP"
                keyboardType="phone-pad"
                // autoCompleteType="tel"
                textContentType="telephoneNumber"
                maxLength={6}
                placeholderTextColor={"#9CA3AF"}
                // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              />
            </View>
          </View>

          <View className="mx-auto w-96">
            <ThemeButton
              onPress={() =>
                signIn({
                  name: "John Doe",
                  email: "john@gmail.com",
                  location: "San Francisco, CA",
                  avatar: "https://i.pravatar.cc/300",
                  phone: "555-555-5555",
                })
              }
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
              <TouchableOpacity activeOpacity={0.6}>
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
