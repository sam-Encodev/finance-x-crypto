import { Platform, Dimensions } from "react-native";
import { Extrapolate, interpolate } from "react-native-reanimated";
import { BlurView as _BlurView } from "expo-blur";
const fruit_0 = require("../assets/fruit-0.png");
const fruit_1 = require("../assets/fruit-1.png");
const fruit_2 = require("../assets/fruit-2.png");

const isWeb = Platform.OS === "web";

export const window = isWeb
  ? {
      ...Dimensions.get("window"),
      width: 700,
    }
  : Dimensions.get("window");

const PAGE_WIDTH = window.width / 2;

export const HEADER_HEIGHT = 100;

export const ElementsText = {
  AUTOPLAY: "AutoPlay",
};

export function parallaxLayout(baseConfig, modeConfig = {}) {
  const { size, vertical } = baseConfig;
  const {
    parallaxScrollingOffset = 100,
    parallaxScrollingScale = 0.8,
    parallaxAdjacentItemScale = parallaxScrollingScale ** 2,
  } = modeConfig;

  return (value) => {
    "worklet";
    const translate = interpolate(
      value,
      [-1, 0, 1],
      [-size + parallaxScrollingOffset, 0, size - parallaxScrollingOffset]
    );

    const zIndex = interpolate(
      value,
      [-1, 0, 1],
      [0, size, 0],
      Extrapolate.CLAMP
    );

    const scale = interpolate(
      value,
      [-1, 0, 1],
      [
        parallaxAdjacentItemScale,
        parallaxScrollingScale,
        parallaxAdjacentItemScale,
      ],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        vertical
          ? {
              translateY: translate,
            }
          : {
              translateX: translate,
            },
        {
          scale,
        },
      ],
      zIndex,
    };
  };
}

export const fruitItems = [fruit_0, fruit_2, fruit_1];
