import { Text, XStack, Card, YStack, View } from "tamagui";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import DefaultAvatar from "../../DefaultAvatar";
import Price from "./Price";
import Chart from "./Chart";
import {
  cardMainText,
  cardPadding,
  cardSubText,
} from "../../../constants/styles";

export default function SubCrypto({ data }) {
  const navigation = useNavigation();
  const styles = {
    width: "32%",
    justifyContent: "flex-end",
    textAlign: "right",
  };

  return (
    <Card
      padding={cardPadding}
      borderRadius={0}
      onPress={() => {
        navigation.navigate({
          name: "Coin",
          params: { coin_id: data?.id },
        });
      }}
    >
      <XStack alignItems="center">
        <XStack alignItems="center" gap={7} width="35%">
          <DefaultAvatar imageUrl={data.logo} />

          <YStack>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              fontSize={cardMainText}
            >
              {data.name}
            </Text>
            <Text fontSize={cardSubText}>{data.symbol}</Text>
          </YStack>
        </XStack>

        <View width="34%" padding={7}>
          <Chart data={data} />
        </View>

        <Price data={data} styles={styles} />
      </XStack>
    </Card>
  );
}
