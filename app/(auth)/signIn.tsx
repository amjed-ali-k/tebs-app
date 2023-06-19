import { Text, TextInput, View } from "react-native";

import ThemeButton from "../../components/buttons/ThemeButton";
import { useRouter } from "expo-router";

export default function signIn() {
  const router = useRouter();
  return (
    <View
      // className="bg-red-500 flex flex-col justify-center items-center h-full w-full"
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
          // className="text-2xl mx-auto -mt-24 font-interExtraBold text-white mb-8"
          style={{
            fontSize: 24,
            lineHeight: 32,
            fontFamily: "Inter_800ExtraBold",
            color: "#F9FAFB",
            marginBottom: 56,
            marginTop: -96,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Login
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
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              // className="text-4xl text-gray-800 mr-2 font-interBold "
              style={{
                fontSize: 36,
                lineHeight: 40,
                fontFamily: "Inter_800ExtraBold",
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
                fontFamily: "Inter_800ExtraBold",
                color: "#4B5563",
                flexGrow: 1,
              }}
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

        <View
          // className="mx-auto w-96"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: 384,
          }}
        >
          <ThemeButton onPress={() => router.push("otp")}>
            Send code
          </ThemeButton>
        </View>
      </View>
    </View>
  );
}
