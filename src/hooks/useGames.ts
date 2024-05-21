import { useEffect } from "react";
import apiClient from "../services/apiClient";
import { useGameStore } from "../store/useGamesStore";
import { useGameCountStore } from "../store/useGameCountStore";
import { useSelectedGenreStore } from "../store/useSelectedGenre";

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
  const { setSelectedGenre } = useSelectedGenreStore();

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        updateLoading(false);
        updateGame(res.data.results);
        updateCount(res.data.count);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleGenreSelect = (id: number) => {
    updateLoading(true);
    setSelectedGenre(id);
    apiClient
      .get<FetchGamesResponse>(`/games?genres=${id}`)
      .then((res) => {
        updateLoading(false);
        updateGame(res.data.results);
        updateCount(res.data.count);
      })
      .catch((error) => console.log(error));
  };

  const handlePlatformSelector = (id: number) => {
    updateLoading(true);
    apiClient
      .get<FetchGamesResponse>(`/games?platform=${id}`)
      .then((res) => {
        updateLoading(false);
        updateGame(res.data.results);
        updateCount(res.data.count);
      })
      .catch((error) => console.log(error));
  };

  const handleOrder = (value: string) => {
    updateLoading(true);
    apiClient
      .get<FetchGamesResponse>(`games?ordering=${value}`)
      .then((res) => {
        // console.log(res.data.results);

        updateLoading(false);
        updateGame(res.data.results);
        updateCount(res.data.count);
      })
      .catch((error) => console.log(error));
  };

  return { handleGenreSelect, handlePlatformSelector, handleOrder };
};

export default useGames;
