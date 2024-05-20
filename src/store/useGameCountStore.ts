import { create } from "zustand";

type State = {
    count: number | null
}

type Action = {
    updateCount: (count: number| null) => void
}

export const  useGameCountStore = create<State & Action>((set) => ({
    count: null,
    updateCount: (count) => set(() => ({ count})),
}))