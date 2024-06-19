import React from "react";
import { FlatList } from "react-native";
import { MainCard } from "./cards/MainCard";
import EmptyState from "./EmptyState";

export default function ItemList({ data, route }) {
  const getData = data || [];
  const getRoute = route ? route : null;

  return (
    <FlatList
      ListEmptyComponent={<EmptyState />}
      data={getData}
      renderItem={(data) => (
        <MainCard data={data.item} route={getRoute.name} key={data.index} />
      )}
      keyExtractor={(item) => item.index}
      contentContainerStyle={{ gap: 10, paddingBottom: 95 }}
      showsVerticalScrollIndicator={false}
    />
  );
}
