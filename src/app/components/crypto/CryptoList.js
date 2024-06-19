import CryptoCard from "./Crypto";
import EmptyState from "../EmptyState";
import { FlatList } from "react-native";
import React, { Fragment } from "react";
import SubCrypto from "../cards/crypto/SubCrypto";

const CryptoList = ({
  route,
  data,
  gap = 10,
  horizontal = false,
  scrollEnabled = true,
}) => {
  const getCoins = data || [];
  const routeName = route ? route.name : null;

  return (
    <FlatList
      ListEmptyComponent={<EmptyState />}
      data={getCoins}
      renderItem={(data) => (
        <Fragment>
          {!horizontal ? (
            <SubCrypto data={data.item} route={routeName} key={data.index} />
          ) : (
            <CryptoCard key={data.id} data={data.item} />
          )}
        </Fragment>
      )}
      keyExtractor={(item) => item.id}
      scrollEnabled={scrollEnabled}
      horizontal={horizontal}
      contentContainerStyle={{ gap: gap }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CryptoList;
