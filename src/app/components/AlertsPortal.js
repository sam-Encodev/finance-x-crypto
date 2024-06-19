import { useState } from "react";
import { red, white, gray } from "../constants/styles";
import { AlertDialog, Button, XStack, YStack, Text } from "tamagui";
import { TouchableOpacity } from "react-native";

export function AlertDialogDemo({ headerText }) {
  const [state, setState] = useState("buy");
  const status = state === "buy" ? "Buy" : "Sell";
  return (
    <AlertDialog>
      <XStack justifyContent="space-between" padding={20}>
        <AlertDialog.Trigger asChild>
          <Button
            width="48%"
            height={35}
            borderRadius={50}
            backgroundColor={red}
            color={white}
            theme="active"
            onPress={() => setState("buy")}
          >
            Buy
          </Button>
        </AlertDialog.Trigger>

        <AlertDialog.Trigger asChild>
          <Button
            width="48%"
            height={35}
            borderRadius={50}
            backgroundColor={gray}
            color={white}
            theme="active"
            onPress={() => setState("sell")}
          >
            Sell
          </Button>
        </AlertDialog.Trigger>
      </XStack>

      <AlertDialog.Portal padding={20}>
        <AlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <AlertDialog.Content
          bordered
          elevate
          key="content"
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <YStack space>
            <AlertDialog.Title>{`${status} ${headerText}`}</AlertDialog.Title>

            <AlertDialog.Description>
              By pressing {status.toLocaleLowerCase()}, you accept to make this
              transaction at the prevailing market price and agree with the
              terms and conditions for making this trade.
            </AlertDialog.Description>
            <XStack gap="$3" justifyContent="flex-end" alignItems="center">
              <AlertDialog.Cancel asChild>
                <TouchableOpacity>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </AlertDialog.Cancel>

              <AlertDialog.Action asChild>
                <Button
                  theme="active"
                  backgroundColor={state === "buy" ? red : gray}
                  color={white}
                >
                  {state === "buy" ? "Buy" : "Sell"}
                </Button>
              </AlertDialog.Action>
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
}
