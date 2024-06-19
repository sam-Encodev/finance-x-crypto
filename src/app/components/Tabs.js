import { View } from "tamagui";
import MostPopular from "./crypto/MostPopular";
import BiggestMovers from "./crypto/BiggestMovers";
import Recommendations from "./crypto/Recommendations";
import { cryptoMenus } from "../constants/crypto/coin";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

const tabContent = {
  0: <MostPopular />,
  1: <BiggestMovers />,
  2: <Recommendations />,
};

const Tabber = () => {
  const [selected, setSelected] = React.useState({ index: 0 });

  return (
    <View style={{ gap: 10 }}>
      <SegmentedControl
        fontStyle={{ color: "black", fontSize: 12 }}
        values={cryptoMenus}
        selectedIndex={selected.index}
        onChange={(event) => {
          setSelected({ index: event.nativeEvent.selectedSegmentIndex });
        }}
      />

      <View>{tabContent[selected.index]}</View>
    </View>
  );
};

export default Tabber;
