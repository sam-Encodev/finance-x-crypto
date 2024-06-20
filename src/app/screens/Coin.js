import { TextInput } from "react-native";
import { View, XStack, YStack, Button, PortalProvider } from "tamagui";
import { useEffect } from "react";
import { CartesianChart, Line, useChartPressState } from "victory-native";
import { Circle } from "@shopify/react-native-skia";
import * as Haptics from "expo-haptics";
import Animated, { useAnimatedProps } from "react-native-reanimated";
import { Bell, NotebookPen } from "@tamagui/lucide-icons";
import Balance from "../components/cards/crypto/Balance";
import { dark, gray, red, white } from "../constants/styles";
import { getColor, valueChange } from "../utils";
import CryptoAlert from "../components/crypto/Alerts";
import { store } from "../../store";

Animated.addWhitelistedNativeProps({ text: true });
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

function ToolTip({ x, y }) {
  return <Circle cx={x} cy={y} r={8} color="blue" />;
}

const Coin = ({ navigation, route }) => {
  const { cryptos } = store((state) => state);
  const { coin_id } = route.params;
  const findCoin = cryptos.filter((data) => data.id === coin_id);
  const getCoin = findCoin[0];
  const getCoinHistory = getCoin.history;
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });

  const values = {
    current_amount: getCoin.current_price,
    last_amount: getCoin.last_price,
  };

  useEffect(() => {
    console.log(isActive);
    if (isActive) Haptics.selectionAsync();
  }, [isActive]);

  const animatedText = useAnimatedProps(() => {
    return {
      text: `${state.y.price.value.value.toFixed(2)} €`,
      defaultValue: "",
    };
  });

  const animatedDateText = useAnimatedProps(() => {
    const date = new Date(state.x.value.value);
    return {
      text: `${date.toLocaleDateString()}`,
      defaultValue: "",
    };
  });

  return (
    <PortalProvider>
      <YStack padding={20}>
        <XStack justifyContent="flex-end" gap={10}>
          <Button
            icon={<Bell />}
            circular
            size={40}
            backgroundColor={gray}
            color={white}
            onPress={() => console.log("bell")}
            theme="active"
          />
          <Button
            icon={<NotebookPen />}
            size={40}
            circular
            backgroundColor={gray}
            color={white}
            onPress={() => console.log("note")}
            theme="active"
          />
        </XStack>
        <Balance headerText={getCoin.symbol} values={values} />
      </YStack>

      <View style={{ height: 570 }}>
        {getCoinHistory && (
          <>
            {isActive && (
              <View>
                <AnimatedTextInput
                  editable={false}
                  underlineColorAndroid={"transparent"}
                  style={{
                    fontSize: 30,
                    color: dark,
                  }}
                  animatedProps={animatedText}
                ></AnimatedTextInput>
                <AnimatedTextInput
                  editable={false}
                  underlineColorAndroid={"transparent"}
                  style={{ fontSize: 18, color: gray }}
                  animatedProps={animatedDateText}
                ></AnimatedTextInput>
              </View>
            )}
            <CartesianChart
              // chartPressState={state}
              axisOptions={{}}
              data={getCoinHistory}
              xKey="timestamp"
              yKeys={["price"]}
              padding={20}
            >
              {({ points }) => (
                <>
                  <Line
                    points={points.price}
                    color={getColor(valueChange(values))}
                    strokeWidth={2.5}
                  />
                  {isActive && (
                    <ToolTip x={state.x.position} y={state.y.price.position} />
                  )}
                </>
              )}
            </CartesianChart>
          </>
        )}
      </View>
      <CryptoAlert headerText={getCoin.symbol} />
    </PortalProvider>
  );
};

export default Coin;
