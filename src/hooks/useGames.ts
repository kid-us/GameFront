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

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  // States
  const { updateGame } = useGameStore();
  const { updateCount } = useGameCountStore();

  useEffect(() => {
    apiClient.get<FetchGamesResponse>("/games").then((res) => {
      setGames(res.data.results);
      setLoading(false);
      updateGame(res.data.results);
      updateCount(res.data.count);
    });
  }, []);

  return { games, loading };
};

export default useGames;
