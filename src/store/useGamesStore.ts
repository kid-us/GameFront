import { create } from "zustand";
import  { Game } from "../hooks/useGames";

type State = {
    game: Game[]
}
  
type Action = {
    updateGame: (game: Game[]) => void
}

export const  useGameStore = create<State & Action>((set) => ({
    game: [],
    updateGame: (game) => set(() => ({ game: game})),
}))