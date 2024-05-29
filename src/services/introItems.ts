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
    trailer: "https://youtu.be/-IJuKT1mHO8?si=6PiuUzv7yGfsNkbZ",
    cover: far,
  },
  {
    id: 2,
    name: "Call Of Duty Modern Warfare II",
    trailer: "https://youtu.be/ztjfwecrY8E?si=0N2NeEiQGAS7Y51x",
    cover: call,
  },
  {
    id: 3,
    name: "Tom Clancy's Ghost Recon Wildlands",
    trailer: "https://youtu.be/Jmzo4KvRmsM?si=58GMyOMVmwZjMxul",
    cover: ghost,
  },
  {
    id: 4,
    name: "Star Wars Outlaws",
    trailer: "https://youtu.be/DUyk6D5rgcE?si=VWNSgy2f38G82QE4",
    cover: war,
  },
  {
    id: 5,
    name: "Forza Horizon 7",
    trailer: "https://youtu.be/9aAr5blVy0g?si=-US3gnfRgHkGibsf",
    cover: forza,
  },
  {
    id: 6,
    name: "EA SPORTS FC 24 ",
    trailer: "https://youtu.be/-vL01jbgENE?si=WY5Y_rwPZR16p4_J",
    cover: fifa,
  },
  {
    id: 7,
    name: "GTA VI",
    trailer: "https://youtu.be/QdBZY2fkU-0?si=hrhIh_ceboL5i_7c",
    cover: gta,
  },
  {
    id: 8,
    name: "Hitman 3",
    trailer: " https://youtu.be/R_Ob-fupzKg?si=KI2dHFe6w-__-_Dy",
    cover: hitman,
  },
];

export default introItems;
