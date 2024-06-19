import Dismiss from "./Dismiss";
import {
  SweepGradient,
  Blend,
  RadialGradient,
  vec,
} from "@shopify/react-native-skia";
import QRCode from "react-native-qrcode-skia";
import { Share } from "@tamagui/lucide-icons";
import { referralLink } from "../../constants";
import { Text, XStack, YStack } from "tamagui";
import { TouchableOpacity } from "react-native";
import ActionSheet from "react-native-actions-sheet";
import { cardPadding, lightGray } from "../../constants/styles";

export default function Referral(props) {
  const QRCodeSize = 140;
  const center = vec(QRCodeSize / 2, QRCodeSize / 2);

  return (
    <ActionSheet
      id={props.sheetId}
      snapPoints={[50, 100]}
      initialSnapIndex={1}
      statusBarTranslucent
      drawUnderStatusBar={true}
      gestureEnabled={true}
      defaultOverlayOpacity={0.3}
    >
      {/* <Dismiss sheetID={props.sheetId} /> */}

      <YStack paddingHorizontal={20} paddingVertical={5} gap={5}>
        <XStack alignItems="center" justifyContent="space-between">
          <Text>Link</Text>

          <TouchableOpacity>
            <Share size={25} color={lightGray} />
          </TouchableOpacity>
        </XStack>

        <Text color={lightGray} alignSelf="center" padding={cardPadding}>
          {referralLink}
        </Text>

        <Text>QR</Text>
        <XStack alignItems="center" justifyContent="center">
          <QRCode value={referralLink} size={150}>
            <SweepGradient
              c={center}
              colors={["cyan", "magenta", "yellow", "cyan"]}
            />
            <Blend mode="difference">
              <RadialGradient
                r={100}
                c={center}
                colors={["magenta", "yellow"]}
              />
            </Blend>
          </QRCode>
        </XStack>
      </YStack>
    </ActionSheet>
  );
}
