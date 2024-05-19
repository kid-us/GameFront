import { Platform } from "../../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaAndroid,
  FaXbox,
  FaApple,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { IconType } from "react-icons";

interface Props {
  platform: Platform[];
}

const PlatformIcons = ({ platform }: Props) => {
  const icons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <>
      {platform.map((platform) => (
        <span>{icons[platform.slug]}</span>
      ))}
    </>
  );
};

export default PlatformIcons;
