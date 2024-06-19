import React from "react";
import { XStack, YStack, View, Text, Button } from "tamagui";
import { Download } from "@tamagui/lucide-icons";
import { borderRadius, white } from "../constants/styles";

export default function Receipt() {
  return (
    <View bg="$blue6" padding="$3" borderRadius={borderRadius}>
      <XStack
        flex={1}
        justifyContent="space-between"
        flexDirection="row"
        alignItems="flex-start"
      >
        <Text
          fontSize={13}
          color={white}
          borderRadius={borderRadius}
          borderWidth={1}
          paddingHorizontal={15}
          borderColor={white}
        >
          Trans ID: 123456789
        </Text>
        <Button
          icon={Download}
          circular
          borderColor={white}
          backgroundColor="transparent"
          color={white}
          theme="active"
        ></Button>
      </XStack>

      <YStack gap={20}>
        <Text fontSize={25} color={white}>
          Mobile Money
        </Text>

        <Text fontSize={13} color={white}>
          June 2, 20234 | 12:00 PM
        </Text>
      </YStack>
    </View>
  );
}
