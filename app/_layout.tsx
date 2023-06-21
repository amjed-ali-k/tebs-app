import { SplashScreen, Slot } from "expo-router";
import * as Sentry from "sentry-expo";
import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import {
  useFonts,
  Inter_500Medium,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import { AuthProvider } from "../context/auth";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

Sentry.init({
  dsn: process.env.SENTRY_DSN,
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
