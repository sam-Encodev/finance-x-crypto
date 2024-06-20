import { View, Card, XStack, ScrollView, Text } from "tamagui";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import PageMenus from "../components/PageMenus";
import { Eye, EyeOff } from "@tamagui/lucide-icons";
import { currency } from "../constants";
import Invite from "../components/Invite";
import { useHeaderHeight } from "@react-navigation/elements";
import {
  cardAmountText,
  cardHeaderText,
  cardPadding,
  pageMargin,
  textWeight,
  gray,
} from "../constants/styles";
import LimitedTransactionList from "../components/LimitedTransactionList";
import CheckboxDemo from "../components/checkbox/CheckBox";
import { store } from "../../store";

export default function Home({ navigation }) {
  const { wallet } = store((state) => state);
  const headerHeight = useHeaderHeight();
  const [state, setState] = useState(false);
  const [balance, setBalance] = useState(wallet.hideBalance);

  const handleShow = () => {
    setState(true);
    setBalance(wallet.cashBalance.toFixed(2));
  };

  const handleHide = () => {
    setState(false);
    setBalance(wallet.hideBalance);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: headerHeight,
      }}
    >
      <View gap="$3" margin={pageMargin}>
        <XStack flex={1} justifyContent="space-between" flexDirection="column">
          <Card bordered size="$4" padding={cardPadding}>
            <Text
              textTransform="uppercase"
              color={gray}
              fontSize={cardHeaderText}
            >
              Available Balance
            </Text>

            <XStack justifyContent="space-between" alignItems="center">
              <Text fontWeight={textWeight} fontSize={cardAmountText}>
                {currency} {balance}
              </Text>
              {state === true ? (
                <TouchableOpacity onPress={() => handleHide()}>
                  <EyeOff size={20} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => handleShow()}>
                  <Eye size={20} />
                </TouchableOpacity>
              )}
            </XStack>
          </Card>
        </XStack>

        <PageMenus navigation={navigation} />

        <Invite />
        <LimitedTransactionList navigation={navigation} />
      </View>
    </ScrollView>
  );
}
