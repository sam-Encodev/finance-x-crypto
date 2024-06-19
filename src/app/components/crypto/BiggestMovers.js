import React from "react";
import CryptoList from "./CryptoList";
import { trimCoins } from "../../constants/crypto/coin";

export default function BiggestMovers() {
  return <CryptoList data={trimCoins} scrollEnabled={false} />;
}
