import { Image } from "expo-image";

export const iconsMap = {
  bonus: require("./../../assets/icons/bonus.png"),
  directions: require("./../../assets/icons/directions.png"),
  expired: require("./../../assets/icons/expired.png"),
  help: require("./../../assets/icons/help.png"),
  redemption: require("./../../assets/icons/redemption.png"),
  settings: require("./../../assets/icons/settings.png"),
  transaction: require("./../../assets/icons/transaction.png"),
};

export type PngIconType = keyof typeof iconsMap;

export const PNGIcon = (
  props: React.ComponentProps<typeof Image> & {
    icon: PngIconType;
  }
) => {
  const { icon, ...rest } = props;
  return <Image source={iconsMap[icon]} {...rest} />;
};
