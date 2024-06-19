import React from "react";
import { FlatList } from "react-native";
import EmptyState from "./EmptyState";
import { SubCard } from "./cards/SubCard";
import { TransactionsRoute, transactionsII } from "../constants";
import ListHeaderComponent from "./ListHeaderComponent";

export default function LimitedTransactionList({ navigation }) {
  return (
    <FlatList
      scrollEnabled={false}
      ListEmptyComponent={<EmptyState />}
      data={transactionsII}
      keyExtractor={(item) => item.index}
      contentContainerStyle={{ gap: 10 }}
      showsVerticalScrollIndicator={false}
      renderItem={(data) => <SubCard data={data.item} key={data.index} />}
      ListHeaderComponent={
        <ListHeaderComponent
          data={transactionsII}
          navigation={navigation}
          route={TransactionsRoute}
          text="Transactions"
        />
      }
    />
  );
}
