import { View } from "tamagui";
import Dismiss from "./Dismiss";
import CheckboxDemo from "../checkbox/CheckBox";
import ActionSheet from "react-native-actions-sheet";

export default function SelectCrypto(props) {
  return (
    <ActionSheet
      id={props.sheetId}
      snapPoints={[50, 100]}
      initialSnapIndex={0}
      statusBarTranslucent
      drawUnderStatusBar={true}
      gestureEnabled={true}
      defaultOverlayOpacity={0.3}
    >
      <Dismiss sheetID={props.sheetId} />
      <View padding={10}>
        <CheckboxDemo />
      </View>
    </ActionSheet>
  );
}
