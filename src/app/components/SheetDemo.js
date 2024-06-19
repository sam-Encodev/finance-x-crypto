import { ChevronDown, X } from "@tamagui/lucide-icons";
import { Sheet, Button, Text, XStack, YStack, View } from "@tamagui/sheet";
import { Fragment, useState } from "react";

function BottomSheetDemo() {
  const [position, setPosition] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <YStack>
        <XStack $sm={{ flexDirection: "column", alignItems: "center" }}>
          <Button theme="active" onPress={() => setOpen(true)}>
            Open
          </Button>
        </XStack>
      </YStack>

      <Sheet
        forceRemoveScrollEnabled={open}
        modal={true}
        open={open}
        onOpenChange={setOpen}
        snapPoints={[25, 50, 85]}
        snapPointsMode="percent"
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
        animation="medium"
      >
        <Sheet.Overlay
          animation="lazy"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <View padding={2}>
          <Text>hello</Text>
        </View>
      </Sheet>
    </Fragment>
  );
}

export default SheetDemo;
