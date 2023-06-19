import { Text, TextInput, View } from "react-native";
import { UserType, useAuth } from "../../context/auth";
import ThemeButton from "../../components/buttons/ThemeButton";

export default function otp() {
  const ctx = useAuth();
  const signIn = (e: UserType) => ctx?.signIn(e);

  return (
    <View
      //   className="bg-red-500 flex flex-col justify-center items-center h-full w-full"
      style={{
        backgroundColor: "#DC2626",
        height: "100%",
        // width: "100%",
        // flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text
          //   className="text-2xl mx-auto -mt-24 font-interExtraBold text-white mb-8"
          style={{
            fontSize: 24,
            lineHeight: 32,
            fontFamily: "Inter_800ExtraBold",
            color: "#F9FAFB",
            marginBottom: 32,
            marginTop: -96,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Otp sent successfully
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
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Mobile Number input */}
            <TextInput
              //   className="font-interBold text-4xl grow text-gray-800"
              style={{
                fontSize: 36,
                lineHeight: 40,
                fontFamily: "Inter_700Bold",
                color: "#4B5563",
                marginRight: 8,
                flexGrow: 1,
              }}
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

        <View
          //   className="mx-auto w-96"
          style={{
            width: 334,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
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
