import Price from "../cards/crypto/Price";
import { XStack, Text, YStack, Card as Carddie } from "tamagui";
import { cardMainText, cardSubText } from "../../constants/styles";

export default function Card({ data }) {
  const styles = {
    width: "32%",
    justifyContent: "flex-end",
    textAlign: "right",
  };
  
  return (
    <Carddie padding={5}>
      <XStack justifyContent="space-between" width="100%">
        <XStack alignItems="center" gap={7}>
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

        <Price data={data} styles={styles} />
      </XStack>
    </Carddie>
  );
}
