import { View, Text } from "tamagui";
import { gray } from "../constants/styles";
import React from "react";

export default function EmptyState() {
  return (
    <View>
      <Text padding={14} color={gray}>
        Empty state
      </Text>
    </View>
  );
}
