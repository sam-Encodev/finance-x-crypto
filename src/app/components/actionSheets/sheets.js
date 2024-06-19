import Example from "./Example";
import Referral from "./Referral";
import SelectCrypto from "./SelectCrypto";
import { registerSheet } from "react-native-actions-sheet";

registerSheet("example-sheet", Example);
registerSheet("referral-sheet", Referral);
registerSheet("crypto-favorites-sheet", SelectCrypto);

export {};
