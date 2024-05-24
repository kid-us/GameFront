import { create } from "zustand";
import { Game } from "../hooks/useGames";

type State = {
  next: string | null;
  previous: string | null;
  game: Game[];
  loading: boolean;
};

type Action = {
  updateGame: (game: Game[]) => void;
  updateLoading: (loading: boolean) => void;
  updateNext: (next: string | null) => void;
  updatePrevious: (previous: string | null) => void;
};

export const useGameStore = create<State & Action>((set) => ({
  game: [],
  next: "",
  previous: "",
  loading: true,
  updateGame: (game) => set(() => ({ game })),
  updateLoading: (loading) => set(() => ({ loading })),
  updateNext: (next) => set(() => ({ next })),
  updatePrevious: (previous) => set(() => ({ previous })),
}));
