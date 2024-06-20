import React from "react";
import { View, Button } from "tamagui";
import { Activity } from "@tamagui/lucide-icons";
import { BlurView } from "expo-blur";
import { borderRadius, pageMargin, black, white } from "../constants/styles";
import ItemList from "../components/ItemList";
import { store } from "../../store";

export default function Transactions({ navigation, route }) {
  const {transactions} = store((state) => state);

  return (
    <View>
      <View margin={pageMargin}>
        <ItemList data={transactions} route={route} />
      </View>

      <BlurView
        intensity={90}
        flex={1}
        justifyContent="center"
        position="absolute"
        bottom={0}
        width="100%"
        height={95}
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
        >
          Plain
        </Button>
      </BlurView>
    </View>
  );
}
