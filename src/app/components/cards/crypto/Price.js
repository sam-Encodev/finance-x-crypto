import React from "react";
import { Text, XStack, YStack } from "tamagui";
import { Dot } from "@tamagui/lucide-icons";
import {
  percentChange,
  valueChange,
  getColor,
  shortenAmount,
} from "../../../utils";
import { cardRightText, textWeight } from "../../../constants/styles";

export default function Price({ data, styles = null }) {
  const values = {
    current_amount: data.current_price,
    last_amount: data.last_price,
  };

  return (
    <YStack width={styles.width}>
      <Text
        textAlign={styles.textAlign}
        fontSize={cardRightText}
        fontWeight={textWeight}
      >
        ${shortenAmount(values)}
      </Text>
      <XStack alignItems="center" justifyContent={styles.justifyContent}>
        <Text fontSize={11} color={getColor(valueChange(values))}>
          {valueChange(values)}
        </Text>
        <Dot size={20} color={getColor(valueChange(values))} />
        <Text fontSize={11} color={getColor(percentChange(values))}>
          {percentChange(values)}%
        </Text>
      </XStack>
    </YStack>
  );
}
