import { View } from "tamagui";
import React from "react";
import { pageMargin } from "../constants/styles";
import EmptyState from "../components/EmptyState";
import CryptoList from "../components/crypto/CryptoList";
import { store } from "../../store";

export default function Coins({ route }) {
  const { cryptos } = store((state) => state);

  return (
    <View height="100%">
      <View margin={pageMargin}>
        {cryptos.length < 0 ? (
          <EmptyState />
        ) : (
          <CryptoList route={route} data={cryptos} />
        )}
      </View>
    </View>
  );
}
