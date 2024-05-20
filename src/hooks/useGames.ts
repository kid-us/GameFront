import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { useGameStore } from "../store/useGamesStore";
import { useGameCountStore } from "../store/useGameCountStore";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  rating: number;
  playtime: number;
  parent_platforms: { platform: Platform }[];
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  // States
  const { updateGame, updateLoading } = useGameStore();
  const { updateCount } = useGameCountStore();

  useEffect(() => {
    apiClient.get<FetchGamesResponse>("/games").then((res) => {
      updateLoading(false);
      updateGame(res.data.results);
      updateCount(res.data.count);
    });
  }, []);

  const handleGenreSelect = (id: number) => {
    updateLoading(true);
    apiClient.get<FetchGamesResponse>(`/games?genres=${id}`).then((res) => {
      updateLoading(false);
      updateGame(res.data.results);
      updateCount(res.data.count);
    });
  };

  return { handleGenreSelect };
};

export default useGames;
