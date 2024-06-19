import Dismiss from "./Dismiss";
import { Text, View } from "tamagui";
import { red } from "../../constants/styles";
import ActionSheet from "react-native-actions-sheet";

export default function Example(props) {
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
      <View padding={10} borderWidth={1} borderColor={`$${red}5`}>
        <Text>{props.payload?.value}</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
      </View>
    </ActionSheet>
  );
}
