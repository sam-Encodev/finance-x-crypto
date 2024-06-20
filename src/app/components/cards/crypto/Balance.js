import { XStack, YStack, Text } from "tamagui";
import {
  shortenAmount,
  valueChange,
  percentChange,
  getColor,
} from "../../../utils";
import {
  cardAmountText,
  cardHeaderText,
  textWeight,
  gray,
} from "../../../constants/styles";

export default function Balance({
  headerText = "Main Balance",
  values = {
    current_amount: 0.0,
    last_amount: 0.0,
  },
}) {
  return (
    <YStack>
      <Text textTransform="uppercase" color={gray} fontSize={cardHeaderText}>
        {headerText}
      </Text>
      <XStack justifyContent="space-between" alignItems="center">
        <Text fontWeight={textWeight} fontSize={cardAmountText}>
          ${shortenAmount(values)}
        </Text>

        <YStack alignItems="flex-end">
          <Text fontWeight={textWeight}>{valueChange(values)}</Text>
          <Text fontWeight={textWeight} color={getColor(percentChange(values))}>
            {percentChange(values)}%
          </Text>
        </YStack>
      </XStack>
    </YStack>
  );
}
