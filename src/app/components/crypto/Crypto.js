import React from "react";
import { Text, XStack, Card, YStack, View } from "tamagui";
import DefaultAvatar from "../DefaultAvatar";
import Price from "../cards/crypto/Price";
import Chart from "../cards/crypto/Chart";

export default function CryptoCard({ data }) {
  const styles = {
    width: null,
    justifyContent: null,
    textAlign: null,
  };

  return (
    <Card
      paddingBottom={5}
      paddingHorizontal={10}
      paddingTop={10}
      width={140}
      bordered
    >
      <YStack gap={15}>
        <XStack alignItems="center" gap={7}>
          <DefaultAvatar size={2} imageUrl={data.logo} />

          <YStack>
            <Text fontSize={13}>{data.name}</Text>
            <Text fontSize={10}>{data.symbol}</Text>
          </YStack>
        </XStack>

        <View width={"100%"} height={20} padding={1}>
          <Chart data={data} />
        </View>

        <Price data={data} styles={styles} />
      </YStack>
    </Card>
  );
}
