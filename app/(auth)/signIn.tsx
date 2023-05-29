import { Text, View } from "react-native";
import { UserType, useAuth } from "../../context/auth";

export default function signIn() {
  const ctx = useAuth();
  const signIn = (e: UserType) => ctx?.signIn(e);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
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
      </Text>
    </View>
  );
}
