import { Text, TextInput, View } from "react-native";
import { UserType, useAuth } from "../../context/auth";
import ThemeButton from "../../components/buttons/ThemeButton";

export default function signIn() {
  const ctx = useAuth();
  const signIn = (e: UserType) => ctx?.signIn(e);

  return (
    <View className="bg-red-500 flex flex-col justify-center items-center h-full w-full">
      <View>
        <Text className="text-2xl mx-auto -mt-24 font-interExtraBold text-white mb-8">
          Otp sent successfully
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
      </View>
    </View>
  );
}
