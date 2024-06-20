import Card from "./Card";
import { useState } from "react";
import { Checkbox } from "tamagui";
import HeaderItem from "./HeaderItem";
import EmptyState from "../EmptyState";
import { FlatList } from "react-native-actions-sheet";
import { store } from "../../../store";

export default function CheckboxDemo() {
  const { cryptos } = store((state) => state);

  let select = [];
  const [count, setCount] = useState(0);
  const [text, setText] = React.useState("Select");

  const handleClick = (e, item) => {
    const itemID = item.id;
    if (e === true && select.includes(itemID)) {
      return;
    }

    if (e === true) {
      select.push(itemID);
      setCount(count + 1);
      return;
    }

    if (e === false) {
      const getItemIndex = select.indexOf(itemID);
      select.splice(getItemIndex, 1);
      setCount(count - 1);
      return;
    }
  };

  return (
    <FlatList
      ListEmptyComponent={<EmptyState />}
      data={cryptos}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ gap: 10 }}
      showsVerticalScrollIndicator={false}
      renderItem={(data) => {
        return (
          <Checkbox
            key={data.id}
            borderWidth={1}
            width="100%"
            height="auto"
            onCheckedChange={(e) => handleClick(e, data.item)}
          >
            <Card data={data.item} />
          </Checkbox>
        );
      }}
      ListHeaderComponent={<HeaderItem count={count} />}
    />
  );
}
