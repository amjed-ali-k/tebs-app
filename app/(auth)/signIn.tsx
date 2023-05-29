import { Text, TextInput, View } from "react-native";

import ThemeButton from "../../components/buttons/ThemeButton";
import { useRouter } from "expo-router";

export default function signIn() {
  const router = useRouter();
  return (
    <View className="bg-red-500 flex flex-col justify-center items-center h-full w-full">
      <View>
        <Text className="text-2xl mx-auto -mt-24 font-interExtraBold text-white mb-8">
          Login
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
              // autoCompleteType="tel"
              textContentType="telephoneNumber"
              maxLength={10}
              placeholderTextColor={"#9CA3AF"}
              // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            />
          </View>
        </View>

        <View className="mx-auto w-96">
          <ThemeButton onPress={() => router.push("otp")}>
            Send code
          </ThemeButton>
        </View>
      </View>
    </View>
  );
}
