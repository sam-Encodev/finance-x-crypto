import { View, Text, XStack, Button } from "tamagui";
import { TouchableOpacity } from "react-native";
import { Settings, ChevronLeft, BellDot, Hammer } from "@tamagui/lucide-icons";
import {
  defaultUser,
  SettingsRoute,
  NotificationsRoute,
  defaultUserImage,
} from "../constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import DefaultAvatar from "./DefaultAvatar";
import { black, lightGray, dark } from "../constants/styles";

export const Header = ({ children }) => {
  return <View>{children}</View>;
};

const HeaderTitle = ({ userName = defaultUser }) => {
  return (
    <XStack gap="$1">
      <Text>Hi, </Text>
      <Text>{userName}</Text>
    </XStack>
  );
};

const HeaderAvatar = ({ navigation }) => {
  return <DefaultAvatar imageUrl={defaultUserImage} navigation={navigation} />;
};

const HeaderGoBack = ({ navigation, icon }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} size={45}>
      {icon ? icon : <ChevronLeft color={black} />}
    </TouchableOpacity>
  );
};

const HeaderClose = ({ navigation, icon }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} size={45}>
      <Text>Close</Text>
    </TouchableOpacity>
  );
};

const SettingsHeader = ({ navigation, routName = SettingsRoute }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routName)}>
      <Settings size={30} color={lightGray} />
    </TouchableOpacity>
  );
};

const HeaderBlur = ({ navigation }) => {
  const { top } = useSafeAreaInsets();

  return (
    <BlurView intensity={100} tint={"extraLight"} style={{ paddingTop: top }}>
      <XStack
        justifyContent="space-between"
        alignItems="center"
        height={60}
        backgroundColor="transparent"
        paddingHorizontal={20}
      >
        <Header.Title />
        <Header.Avatar navigation={navigation} />
      </XStack>
    </BlurView>
  );
};

const HeaderCustom = ({ navigation, routName = NotificationsRoute }) => {
  const { top } = useSafeAreaInsets();

  return (
    <BlurView intensity={100} tint={"extraLight"} style={{ paddingTop: top }}>
      <XStack
        justifyContent="space-between"
        alignItems="center"
        height={60}
        backgroundColor="transparent"
        paddingHorizontal={20}
      >
        <XStack gap={7} alignItems="center">
          <Header.Avatar navigation={navigation} />
          <Header.Title />
        </XStack>
        <XStack gap={7} alignItems="center">
          <Button
            icon={<BellDot />}
            circular
            size={40}
            color={black}
            onPress={() => navigation.navigate(routName)}
            theme="active"
          />
        </XStack>
      </XStack>
    </BlurView>
  );
};

Header.Title = HeaderTitle;
Header.Avatar = HeaderAvatar;
Header.GoBack = HeaderGoBack;
Header.Settings = SettingsHeader;
Header.Custom = HeaderCustom;
Header.Close = HeaderClose;
