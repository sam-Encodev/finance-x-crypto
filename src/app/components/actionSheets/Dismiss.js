import { View } from "tamagui";
import { X } from "@tamagui/lucide-icons";
import { TouchableOpacity } from "react-native";
import { lightGray } from "../../constants/styles";
import { SheetManager } from "react-native-actions-sheet";

export default function DismissSheet({ sheetID }) {
  const handleClose = () => {
    if (sheetID == null) {
      return;
    }

    SheetManager.hide(sheetID);
  };

  return (
    <View paddingHorizontal={10} flexDirection="row" justifyContent="flex-end">
      <TouchableOpacity onPress={() => handleClose()}>
        <X size={30} color={lightGray} />
      </TouchableOpacity>
    </View>
  );
}
