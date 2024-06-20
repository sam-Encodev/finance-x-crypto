import React from "react";
import CryptoList from "./CryptoList";
import { store } from "../../../store";

export default function MostPopular() {
  const { cryptos } = store((state) => state);
  return <CryptoList data={cryptos} scrollEnabled={false} />;
}
