import React from "react";
import CryptoList from "./CryptoList";
import { store } from "../../../store";

export default function Recommendations() {
  const { newTrimCoins } = store((state) => state);
  return <CryptoList data={newTrimCoins} scrollEnabled={false} />;
}
