import React from "react";
import { BlurView } from "expo-blur";
import { ChevronRight, LogOut } from "@tamagui/lucide-icons";
import { ListItem, YGroup, View, Text, YStack } from "tamagui";
import { defaultUser, profileMenus, profileMenusII, defaultUserImage } from "../constants";
import DefaultAvatar from "../components/DefaultAvatar";
import { dark, pageMargin, white } from "../constants/styles";

export default function Profile({ navigation }) {
  return (
    <BlurView
      intensity={80}
      tint={dark}
      style={{
        flex: 1,
        paddingTop: 100,
        backgroundColor: "rgba(0,0,0,0.5)",
        flexDirection: "column",
      }}
    >
      <View margin={pageMargin}>
        <YStack gap={20}>
          <YStack alignItems="center" gap={15}>
            <DefaultAvatar size={10} imageUrl={defaultUserImage} />

            <Text style={{ fontSize: 26, color: white }}>{defaultUser}</Text>
          </YStack>

          <YGroup alignSelf="center" bordered size="$5">
            {profileMenus.map((menu) => (
              <YGroup.Item key={menu.index}>
                <ListItem
                  backgroundColor={white}
                  onPress={() => navigation.navigate(menu.name)}
                  hoverTheme
                  pressTheme
                  title={menu.name}
                  icon={menu.icon}
                  iconAfter={<ChevronRight />}
                />
              </YGroup.Item>
            ))}
          </YGroup>

          <YGroup alignSelf="center" bordered size="$5">
            {profileMenusII.map((menu) => (
              <YGroup.Item key={menu.index}>
                <ListItem
                  backgroundColor={white}
                  hoverTheme
                  pressTheme
                  title={menu.name}
                  icon={menu.icon}
                />
              </YGroup.Item>
            ))}
          </YGroup>

          <YGroup alignSelf="center" bordered size="$5">
            <YGroup.Item>
              <ListItem
                backgroundColor={white}
                hoverTheme
                pressTheme
                title="Logout"
                icon={LogOut}
              />
            </YGroup.Item>
          </YGroup>
        </YStack>
      </View>
    </BlurView>
  );
}
