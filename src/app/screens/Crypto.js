import React from "react";
import { sheetManager } from "../utils";
import Tabber from "../components/Tabs";
import { Plus } from "@tamagui/lucide-icons";
import CryptoList from "../components/crypto/CryptoList";
import MainBalance from "../components/cards/crypto/MainBalance";
import { View, ScrollView, XStack, Button, YStack } from "tamagui";
import ListHeaderComponent from "../components/ListHeaderComponent";
import { pageMargin, black, white, textWeight } from "../constants/styles";
import {
  CoinsRoute,
  cryptoMenus,
  CryptoFavoritesRoute,
  MyFunds,
} from "../constants";
import { store } from "../../store";

export default function Crypto({ navigation }) {
  const { trimCoins } = store((state) => state);
  const route = CryptoFavoritesRoute;

  const handleItemClick = () => {
    if (!route) {
      return null;
    }
    sheetManager(route);
  };

  return (
    <View height="100%">
      <ScrollView showsVerticalScrollIndicator={false}>
        <YStack gap={25} margin={pageMargin}>
          <MainBalance />

          <YStack gap={11}>
            <ListHeaderComponent
              data={trimCoins}
              navigation={navigation}
              route={CoinsRoute}
              text={MyFunds}
            />

            <XStack gap={6} height={150}>
              <Button
                icon={<Plus />}
                size={55}
                width={37}
                height="auto"
                borderRadius={50}
                backgroundColor={black}
                fontWeight={textWeight}
                color={white}
                theme="active"
                onPress={() => handleItemClick()}
              />

              <CryptoList data={trimCoins} horizontal={true} gap={6} />
            </XStack>

            <Tabber menu={cryptoMenus} />
          </YStack>
        </YStack>
      </ScrollView>
    </View>
  );
}
