import React from "react";
import CryptoList from "./CryptoList";
import { coins } from "../../constants/crypto/coin";

export default function MostPopular() {
  return <CryptoList data={coins} scrollEnabled={false} />;
}
