import { menus } from "../constants";
import { Button, XStack, Text, YStack } from "tamagui";

export default function PageMenus({ navigation }) {
  return (
    <XStack gap="$3" justifyContent="space-between">
      {menus.map((item) => {
        return (
          <YStack alignItems="center" gap="$3" key={item.index}>
            <Button
              theme="active"
              icon={item.icon}
              size={70}
              circular
              backgroundColor={item.backgroundColor}
              elevation="$1"
              onPress={() => navigation.navigate(item.name)}
              color={item.color}
            />
            <Text fontSize={13}>{item.name}</Text>
          </YStack>
        );
      })}
    </XStack>
  );
}
