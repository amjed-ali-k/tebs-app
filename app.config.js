import "dotenv/config";

export default {
  expo: {
    name: "tebs-app",
    slug: "tebs-app",
    scheme: "myapp",
    version: "1.0.3",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash-t.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    platforms: ["android", "ios"],
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.amjedalik.tebsapp",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.amjedalik.tebsapp",
    },
    extra: {
      eas: {
        projectId: "d9418e92-2fde-40f9-b57d-108ca891fd6c",
      },
      sentryDsn: process.env.SENTRY_DSN,
    },
    owner: "amjed-ali-k",
    runtimeVersion: {
      policy: "sdkVersion",
    },
    updates: {
      url: "https://u.expo.dev/d9418e92-2fde-40f9-b57d-108ca891fd6c",
    },
    plugins: ["sentry-expo"],
    hooks: {
      postPublish: [
        {
          file: "sentry-expo/upload-sourcemaps",
          config: {
            organization: "amjed-ali",
            project: "tebs-app",
          },
        },
      ],
    },
  },
};
