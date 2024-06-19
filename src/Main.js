import {
  Help,
  Home,
  Coin,
  Coins,
  Crypto,
  Account,
  Profile,
  Deposits,
  Settings,
  Transfers,
  Withdrawals,
  Transactions,
  Notifications,
} from "./app/screens";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { X } from "@tamagui/lucide-icons";
import { lightGray } from "./app/constants/styles";
import { Header } from "./app/components/HeaderItems";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* Pages */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation, route }) => ({
          headerTransparent: true,
          header: () => <Header.Custom navigation={navigation} route={route} />,
        })}
      />
      <Stack.Screen
        name="Coins"
        component={Coins}
        options={({ navigation }) => ({
          headerLeft: () => <Header.GoBack navigation={navigation} />,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
      <Stack.Screen
        name="Crypto"
        component={Crypto}
        options={({ navigation }) => ({
          headerLeft: () => <Header.GoBack navigation={navigation} />,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
      <Stack.Screen
        name="Deposits"
        component={Deposits}
        options={({ navigation }) => ({
          headerLeft: () => <Header.GoBack navigation={navigation} />,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({ navigation }) => ({
          headerLeft: () => <Header.GoBack navigation={navigation} />,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
      <Stack.Screen
        name="Transfers"
        component={Transfers}
        options={({ navigation }) => ({
          headerLeft: () => <Header.GoBack navigation={navigation} />,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
      <Stack.Screen
        name="Withdrawals"
        component={Withdrawals}
        options={({ navigation }) => ({
          headerLeft: () => <Header.GoBack navigation={navigation} />,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
      <Stack.Screen
        name="Transactions"
        component={Transactions}
        options={({ navigation }) => ({
          headerLeft: () => <Header.GoBack navigation={navigation} />,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />

      {/* Modals */}
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          presentation: "transparentModal",
          animation: "fade",
          title: null,
          headerTransparent: true,
          headerLeft: () => (
            <Header.GoBack
              navigation={navigation}
              icon={<X color={lightGray} />}
            />
          ),
        })}
      />

      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={({ navigation }) => ({
          presentation: "modal",
          title: null,
          headerTransparent: false,
        })}
      />

      <Stack.Screen
        name="Coin"
        component={Coin}
        options={({ navigation }) => ({
          presentation: "modal",
          title: null,
          headerTransparent: true,
        })}
      />

      <Stack.Screen
        name="Help"
        component={Help}
        options={({ navigation }) => ({
          presentation: "modal",
          title: null,
          headerTransparent: false,
        })}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={({ navigation }) => ({
          presentation: "modal",
          title: null,
          headerTransparent: false,
        })}
      />
    </Stack.Navigator>
  );
}
