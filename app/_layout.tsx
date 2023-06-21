import { SplashScreen, Slot } from "expo-router";
import * as Sentry from "sentry-expo";
import {
  useFonts,
  Inter_500Medium,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import { AuthProvider } from "../context/auth";
import Constants from "expo-constants";
export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

Sentry.init({
  dsn: "https://948835e741e444e6982c63c9bb014c2c@o1062344.ingest.sentry.io/4505395617005569",
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

export default function Layout() {
  // Load the font `Inter_500Medium`
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    // The native splash screen will stay visible for as long as there
    // are `<SplashScreen />` components mounted. This component can be nested.

    return <SplashScreen />;
  }

  // Render the children routes now that all the assets are loaded.
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
