import React from "react";
import { getColor, valueChange } from "../../../utils";
import { CartesianChart, Line } from "victory-native";

export default function Chart({ data }) {
  const values = {
    current_amount: data?.current_price,
    last_amount: data?.last_price,
  };

  const history = data?.history;

  return (
    <CartesianChart data={history} xKey="timestamp" yKeys={["price"]}>
      {({ points }) => (
        <Line
          points={points.price}
          color={getColor(valueChange(values))}
          strokeWidth={1.5}
        />
      )}
    </CartesianChart>
  );
}
