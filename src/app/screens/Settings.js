import { View, Text, ScrollView } from "tamagui";
import React from "react";
import { pageMargin } from "../constants/styles";

export default function Settings({ navigation }) {
  return (
    <View height="100%">
      <ScrollView>
        <View margin={pageMargin}>
          <Text>Settings</Text>
        </View>
      </ScrollView>
    </View>
  );
}
