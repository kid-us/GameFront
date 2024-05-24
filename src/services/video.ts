import {
  call,
  call2,
  tom,
  farcry,
  forza,
  star,
  gta,
  mafia,
} from "../assets/video";
import {
  callofduty,
  far6,
  forza6,
  mafia3,
  war,
  ghost,
  gta5,
} from "../assets/img";

interface Video {
  id: number;
  name: string;
  src: string;
  cover: string;
}

// Define an array of Video objects
export const videos: Video[] = [
  { id: 1, name: "Far Cry 6", src: farcry, cover: far6 },
  { id: 2, name: "Call Of Duty Modern Warfare", src: call, cover: callofduty },
  { id: 3, name: "Tom Clancy's Ghost Recon Wildlands", src: tom, cover: ghost },
  { id: 4, name: "Star Wars Outlaws", src: star, cover: war },
  { id: 5, name: "Forza Horizon 7", src: forza, cover: forza6 },
  { id: 6, name: "Call of Duty WII", src: call2, cover: callofduty },
  { id: 7, name: "GTA VI", src: gta, cover: gta5 },
  { id: 8, name: "Mafia III Revenge", src: mafia, cover: mafia3 },
];
