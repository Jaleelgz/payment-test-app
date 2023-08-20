import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Provider as StoreProvider } from "react-redux";
import { PaperProvider } from "react-native-paper";
import { store } from "./src/store/store";
import { theme } from "./src/constants/theme";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { ToastConfig } from "./src/constants/toastConfig";
import { ErrorHandler } from "./src/common/ErrorBoundary";
import Main from "./src/Main";
import { useCallback } from "react";
import { COLORS } from "./src/constants/colors";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.otf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.otf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.otf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{ height: "100%", width: "100%", flex: 1 }}
      onLayout={onLayoutRootView}
    >
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <StatusBar style="auto" backgroundColor={COLORS.DISABLED_F2} />

            <ErrorHandler>
              <Main />
              <Toast
                visibilityTime={4000}
                config={ToastConfig}
                position="bottom"
              />
            </ErrorHandler>
          </NavigationContainer>
        </PaperProvider>
      </StoreProvider>
    </View>
  );
}
