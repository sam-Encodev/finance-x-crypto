import "@tamagui/core/reset.css";
import Main from "./src/Main.js";
import { TamaguiProvider, createTamagui } from "tamagui";
import { config } from "@tamagui/config/v3";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SheetProvider } from "react-native-actions-sheet";
import "./src/app/components/actionSheets/sheets.js";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const appConfig = createTamagui(config);

export default function App() {
  return (
    <NavigationContainer>
      <TamaguiProvider config={appConfig}>
        <SheetProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <Main />
          </GestureHandlerRootView>
        </SheetProvider>
      </TamaguiProvider>
    </NavigationContainer>
  );
}
