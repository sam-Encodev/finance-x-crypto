import { Text, ScrollView } from "tamagui";
import React from "react";
import { pageMargin } from "../constants/styles";

export default function Help({ navigation }) {
  return (
    <ScrollView margin={pageMargin}>
      <Text>Help</Text>
    </ScrollView>
  );
}
