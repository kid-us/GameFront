// import { create } from "zustand";
// import { Game } from "../hooks/useGames";

// type State = {
//   game: Game[];
//   loading: true;
// };

// type Action = {
//   updateGame: (game: Game[]) => void;
//   updateLoading: (loading: boolean) => void;
// };

// export const useGameStore = create<State & Action>((set) => ({
//   game: [],
//   loading: true,
//   updateGame: (game) => set(() => ({ game: game })),
//   updateLoading: (loading) => set(() => !loading),
// }));

import { create } from "zustand";
import { Game } from "../hooks/useGames";

type State = {
  game: Game[];
  loading: boolean;
};

type Action = {
  updateGame: (game: Game[]) => void;
  updateLoading: (loading: boolean) => void;
};

export const useGameStore = create<State & Action>((set) => ({
  game: [],
  loading: true,
  updateGame: (game) => set(() => ({ game })),
  updateLoading: (loading) => set(() => ({ loading })),
}));
