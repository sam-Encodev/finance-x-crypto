import { View } from "tamagui";
import React from "react";
import { pageMargin } from "../constants/styles";
import { coins } from "../constants/crypto/coin";
import EmptyState from "../components/EmptyState";
import CryptoList from "../components/crypto/CryptoList";

export default function Coins({ route }) {
  const getCoins = coins || [];

  return (
    <View height="100%">
      <View margin={pageMargin}>
        {getCoins.length < 0 ? (
          <EmptyState />
        ) : (
          <CryptoList route={route} data={getCoins} />
        )}
      </View>
    </View>
  );
}
