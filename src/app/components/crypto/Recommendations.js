import React from "react";
import CryptoList from "./CryptoList";
import { newTrimCoins } from "../../constants/crypto/coin";

export default function Recommendations() {
  return <CryptoList data={newTrimCoins} scrollEnabled={false} />;
}
