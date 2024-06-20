import { create } from "zustand";
import { notifications } from "../app/constants";
// import { zustandStorage } from "@/store/mmkv-storage";
// import { createJSONStorage, persist } from "zustand/middleware";

import { transactions } from "../app/constants";
import { coins } from "../app/constants/crypto/coin";

const copyCoins = [...coins];

export const store = create((set) => ({
  wallet: {
    cashBalance: 0.00,
    hideBalance: "******",
    crypto: {
      current_amount: 80732.32,
      last_amount: 79355.67,
    },
  },
  cryptos: coins,
  transactions: transactions,
  notifications: notifications,
  trimCoins: copyCoins.splice(-6),
  newTrimCoins: [...copyCoins].reverse(),
  deposits: transactions.filter((data) => data.type === "deposit"),
  transfers: transactions.filter((data) => data.type === "transfer"),
  withdrawals: transactions.filter((data) => data.type === "withdrawal"),
}));
