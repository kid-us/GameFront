import { call, far, forza, fifa, hitman, gta, ghost, war } from "../assets";

interface Intro {
  id: number;
  name: string;
  trailer: string;
  cover: string;
}

// Define an array of Intro objects
const introItems: Intro[] = [
  {
    id: 1,
    name: "Far Cry 6",
    trailer: "DFze21M_O6s",
    cover: far,
  },
  {
    id: 2,
    name: "Call Of Duty Modern Warfare II",
    trailer: "ztjfwecrY8E",
    cover: call,
  },
  {
    id: 3,
    name: "Tom Clancy's Ghost Recon Wildlands",
    trailer: "Jmzo4KvRmsM",
    cover: ghost,
  },
  {
    id: 4,
    name: "Star Wars Outlaws",
    trailer: "DUyk6D5rgcE",
    cover: war,
  },
  {
    id: 5,
    name: "Forza Horizon 7",
    trailer: "9aAr5blVy0g",
    cover: forza,
  },
  {
    id: 6,
    name: "EA SPORTS FC 24 ",
    trailer: "XhP3Xh4LMA8",
    cover: fifa,
  },
  {
    id: 7,
    name: "GTA VI",
    trailer: "QdBZY2fkU-0",
    cover: gta,
  },
  {
    id: 8,
    name: "Hitman 3",
    trailer: "R_Ob-fupzKg",
    cover: hitman,
  },
];

export default introItems;
