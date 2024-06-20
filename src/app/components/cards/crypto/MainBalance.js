import React from "react";
import { XStack, Card, YStack, Button } from "tamagui";
import { ArrowDownCircle, ArrowUpCircle } from "@tamagui/lucide-icons";
import {
  cardPadding,
  textWeight,
  white,
  black,
} from "../../../constants/styles";
import Balance from "./Balance";
import { store } from "../../../../store";

export default function MainBalance() {
  const { wallet } = store((state) => state);
  return (
    <Card bordered size="$4" padding={cardPadding}>
      <YStack gap={10}>
        <Balance values={wallet.crypto} />

        <XStack justifyContent="space-between">
          <Button
            icon={<ArrowUpCircle />}
            size={35}
            width="48%"
            height={35}
            borderRadius={50}
            backgroundColor={black}
            fontWeight={textWeight}
            color={white}
            theme="active"
          >
            Withdraw
          </Button>
          <Button
            icon={<ArrowDownCircle />}
            size={35}
            width="48%"
            height={35}
            borderRadius={50}
            backgroundColor={black}
            fontWeight={textWeight}
            color={white}
            theme="active"
          >
            Deposit
          </Button>
        </XStack>
      </YStack>
    </Card>
  );
}
