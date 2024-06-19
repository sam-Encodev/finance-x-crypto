import { Avatar } from "tamagui";
import { defaultImage } from "../utils";
import { red } from "../constants/styles";

export default function DefaultAvatar({
  navigation,
  size = 3,
  routName = "Profile",
  imageUrl = defaultImage,
}) {
  const handleNavigation = () => {
    if (navigation && routName) {
      navigation.navigate(routName);

      return;
    }

    return null;
  };
  return (
    <Avatar circular size={`$${size}`} onPress={handleNavigation}>
      <Avatar.Image accessibilityLabel="Cam" src={imageUrl} />
      <Avatar.Fallback bc={red} />
    </Avatar>
  );
}
