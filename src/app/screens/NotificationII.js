import { Text, ScrollView, View, XStack, Button, YStack } from "tamagui";
import React from "react";
import { Bell } from "@tamagui/lucide-icons";
import { cardSubText, gray, pageMargin, white } from "../constants/styles";
import { notifications } from "../constants";

const renderView = (item) => {
  return (
    <XStack alignItems="center" gap={10}>
      <Button
        icon={<Bell />}
        circular
        size={40}
        backgroundColor={gray}
        color={white}
        theme="active"
      />
      <YStack gap={1}>
        <Text>Hello</Text>
        <Text fontSize={cardSubText}>Hello</Text>
      </YStack>
    </XStack>
  );
};

export default function Notifications({ navigation }) {
  return (
    <ScrollView margin={pageMargin}>
      <Text>Notifications</Text>
      {notifications.map((item) => {
        return (
          <YStack key={item.index} gap={5} borderWidth={1} paddingVertical={10}>
            {renderView(item)}
          </YStack>
        );
      })}
    </ScrollView>
  );
}
