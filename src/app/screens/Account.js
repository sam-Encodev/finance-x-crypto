import { Text, ScrollView } from "tamagui";
import React from "react";
import { pageMargin } from "../constants/styles";

export default function Account({ navigation }) {
  return (
    <ScrollView margin={pageMargin}>
      <Text>Account</Text>
    </ScrollView>
  );
}
