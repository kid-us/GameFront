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

type Platform = {
  id: number;
  name: string;
  icon: IconType;
};

export const platforms: Platform[] = [
  {
    id: 1,
    name: "PC",
    icon: FaWindows,
  },
  {
    id: 3,
    name: "Xbox",
    icon: FaXbox,
  },
  {
    id: 2,
    name: "Playstation",
    icon: FaPlaystation,
  },
  {
    id: 5,
    name: "Apple (Mac)",
    icon: FaApple,
  },
  {
    id: 6,
    name: "Linux",
    icon: FaLinux,
  },
  {
    id: 14,
    name: "Web",
    icon: BsGlobe,
  },
  {
    id: 8,
    name: "Android",
    icon: FaAndroid,
  },
  {
    id: 4,
    name: "I Phone",
    icon: MdPhoneIphone,
  },
  {
    id: 7,
    name: "Nintendo",
    icon: SiNintendo,
  },
];
