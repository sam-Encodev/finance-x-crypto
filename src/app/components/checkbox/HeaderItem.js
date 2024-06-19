import { XStack, Text } from "tamagui";
import { Trash2 } from "@tamagui/lucide-icons";
import { TouchableOpacity } from "react-native";
import { cardHeaderText, gray } from "../../constants/styles";

export default function HeaderItem({ count }) {
  return (
    <XStack justifyContent="space-between" alignItems="center">
      <Text color={gray} fontSize={cardHeaderText} width="75%">
        Select token(s)
      </Text>

      {count > 0 && (
        <Text color={gray} fontSize={cardHeaderText} textTransform="uppercase">
          {count}
        </Text>
      )}

      {/* <TouchableOpacity}>
          <Trash2 size={15} />
        </TouchableOpacity> */}
    </XStack>
  );
}
