import { create } from "zustand";

type State = {
  id: number | null;
};

type Action = {
  setSelectedGenre: (id: number | null) => void;
};

export const useSelectedGenreStore = create<State & Action>((set) => ({
  id: null,
  setSelectedGenre: (id) => set(() => ({ id })),
}));
