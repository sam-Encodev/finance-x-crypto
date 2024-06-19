import React from "react";
import {
  borderRadius,
  black,
  white,
  blue,
  cardPadding,
  textWeight,
} from "../constants/styles";
import {
  ReferralRoute,
  amount,
  currency,
  shareContent,
  shareOptions,
} from "../constants";
import { Share, Alert } from "react-native";
import { XStack, View, Text, Button, YStack } from "tamagui";

export default function Invite({ route = ReferralRoute }) {
  const handleItemClick = async () => {
    if (!route) {
      return null;
    }

    try {
      const result = await Share.share(shareContent, shareOptions);
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  // const handleItemClick = () => {
  //   if (!route) {
  //     return null;
  //   }
  //   sheetManager(route);
  // };

  return (
    <View bg={`$${blue}6`} padding={cardPadding} borderRadius={borderRadius}>
      <XStack
        flex={1}
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
      >
        <YStack width="60%" gap={0}>
          <Text fontSize={17} fontWeight={textWeight}>
            Invite your friend now!
          </Text>
        </YStack>
        <Button
          height={30}
          color={white}
          theme="active"
          borderWidth={0}
          borderColor="none"
          backgroundColor={black}
          borderRadius={borderRadius}
          paddingHorizontal={cardPadding}
          onPress={() => handleItemClick()}
        >
          {`Earn ${currency}${amount}`}
        </Button>
      </XStack>
    </View>
  );
}
