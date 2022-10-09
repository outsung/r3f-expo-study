import { ExpoConfig, ConfigContext } from "@expo/config";

const APP_VARIANT: "production" | "dev" | "stage" | "local" =
  (process.env as any).APP_VARIANT || "production";

export default ({ config }: ConfigContext): ExpoConfig => {
  const appName = {
    local: "rhetoric (local)",
    dev: "rhetoric (dev)",
    stage: "rhetoric (stage)",
    production: "rhetoric",
  };
  const bundleIdentifier = {
    local: "com.outsung.rhetoric.local",
    dev: "com.outsung.rhetoric.dev",
    stage: "com.outsung.rhetoric.stage",
    production: "com.outsung.rhetoric",
  };

  const version = "1.0.0";
  const buildNumber = 1;

  return {
    ...config,
    name: appName[APP_VARIANT],
    slug: "rhetoric",
    runtimeVersion: version,
    version,
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      bundleIdentifier: bundleIdentifier[APP_VARIANT],
      supportsTablet: true,
      buildNumber: String(buildNumber),
    },
    android: {
      package: bundleIdentifier[APP_VARIANT],
      versionCode: buildNumber,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  };
};
