import React from "react";
import CryptoList from "./CryptoList";
import { store } from "../../../store";

export default function BiggestMovers() {
  const { trimCoins } = store((state) => state);
  return <CryptoList data={trimCoins} scrollEnabled={false} />;
}
