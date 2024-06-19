import { YStack, Card, XStack, Text } from "tamagui";
import {
  borderRadius,
  cardMainText,
  cardRightText,
  cardPadding,
  cardSubText,
  textWeight,
} from "../../constants/styles";
import DefaultAvatar from "../DefaultAvatar";
import { Dot } from "@tamagui/lucide-icons";
import { sheetManager, status } from "../../utils";
import {
  format,
  formatDistance,
  formatRelative,
  subDays,
  subHours,
} from "date-fns";

export const MainCard = ({ data, route }) => {
  const history = data || [];

  const handleItemClick = (data) => {
    if (!route) {
      return null;
    }

    if (data.type) {
      console.log("type checker");
    }
    sheetManager(route);
  };

  return (
    <Card
      padding={cardPadding}
      borderRadius={0}
      onPress={() => handleItemClick(data)}
    >
      <XStack justifyContent="space-between" alignItems="center">
        <XStack flexDirection="row" gap={10} alignItems="center">
          <DefaultAvatar imageUrl={history.imageUrl} size={4} />
          <YStack>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              fontSize={cardMainText}
            >
              {history.bankName}
            </Text>
            <XStack alignItems="center">
              {history.time && (
                <Text fontSize={cardSubText}>
                  {formatDistance(subHours(new Date(), 3), new Date(), {
                    addSuffix: true,
                  })}
                </Text>
              )}
              {history.date && (
                <Text fontSize={cardSubText}>
                  {formatRelative(subDays(new Date(), 3), new Date())}
                </Text>
              )}
              {history.status && <Dot size={20} />}
              {history.status && (
                <Text
                  fontSize={cardSubText}
                  bg={`$${status(history.status)}4`}
                  color={`$${status(history.status)}9`}
                  paddingHorizontal={6}
                  borderRadius={borderRadius}
                  borderWidth={1}
                  borderColor={`$${status(history.status)}4`}
                  textTransform="capitalize"
                >
                  {history.status}
                </Text>
              )}
            </XStack>
          </YStack>
        </XStack>

        <Text fontSize={cardRightText} fontWeight={textWeight}>
          {history.amount}
        </Text>
      </XStack>
    </Card>
  );
};
