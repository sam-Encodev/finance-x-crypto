import { View, Button } from "tamagui";
import { transactions } from "../constants";
import React from "react";
import { Activity } from "@tamagui/lucide-icons";
import { BlurView } from "expo-blur";
import { borderRadius, pageMargin, black, white } from "../constants/styles";
import ItemList from "../components/ItemList";

export default function Transfers({ navigation, route }) {
  const getTransfers = transactions.filter((data) => data.type === "transfer");

  return (
    <View height="100%">
      <View margin={pageMargin}>
        <ItemList data={getTransfers} route={route} />
      </View>

      <BlurView
        intensity={90}
        flex={1}
        justifyContent="center"
        position="absolute"
        bottom={0}
        width="100%"
        height={100}
        backgroundColor="transparent"
      >
        <Button
          size="$3"
          icon={Activity}
          marginHorizontal="30%"
          borderRadius={borderRadius}
          borderTopWidth={0}
          height={40}
          backgroundColor={black}
          color={white}
          theme="active"
        >
          Plain
        </Button>
      </BlurView>
    </View>
  );
}
