import React from "react";
import { XStack, Text, View } from "tamagui";
import { TouchableOpacity } from "react-native";
import { ArrowRight } from "@tamagui/lucide-icons";
import { cardHeaderText, textWeight, gray } from "../constants/styles";

export default function ListHeaderComponent({
  data,
  navigation,
  route,
  text = "Add Text",
}) {
  const getData = data || [];
  const getNavigation = navigation;
  const getRoute = route;

  return (
    <XStack justifyContent="space-between" alignItems="center">
      <Text
        textTransform="uppercase"
        color={gray}
        fontSize={cardHeaderText}
        width="75%"
      >
        {text}
      </Text>

      {getData.length > 0 && (
        <TouchableOpacity onPress={() => getNavigation.navigate(getRoute)}>
          <View
            flex={1}
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            gap={5}
          >
            <Text fontWeight={textWeight}>View all</Text>
            <ArrowRight size={15} />
          </View>
        </TouchableOpacity>
      )}
    </XStack>
  );
}
