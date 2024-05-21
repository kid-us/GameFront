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
  const { updateGame, updateLoading } = useGameStore();
  const { updateCount } = useGameCountStore();
  const { setSelectedGenre } = useSelectedGenreStore();

  useEffect(() => {
    const fetchData = async () => {
      updateLoading(true);
      try {
        const response = await apiClient.get<FetchGamesResponse>("/games");
        updateGame(response.data.results);
        updateCount(response.data.count);
      } catch (error) {
        updateLoading(true);
        console.error(error);
      } finally {
        updateLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleGenreSelect = async (id: number) => {
    updateLoading(true);
    setSelectedGenre(id);
    try {
      const response = await apiClient.get<FetchGamesResponse>(
        `/games?genres=${id}`
      );
      updateGame(response.data.results);
      updateCount(response.data.count);
    } catch (error) {
      updateLoading(true);
      console.error(error);
    } finally {
      updateLoading(false);
    }
  };

  const handlePlatformSelect = async (id: number) => {
    updateLoading(true);
    try {
      const response = await apiClient.get<FetchGamesResponse>(
        `/games?platforms=${id}`
      );
      updateGame(response.data.results);
      updateCount(response.data.count);
    } catch (error) {
      updateLoading(true);
      console.error(error);
    } finally {
      updateLoading(false);
    }
  };

  const handleOrder = async (value: string) => {
    updateLoading(true);
    try {
      const response = await apiClient.get<FetchGamesResponse>(
        `/games?ordering=${value}`
      );
      updateGame(response.data.results);
      updateCount(response.data.count);
    } catch (error) {
      updateLoading(true);
      console.error(error);
    } finally {
      updateLoading(false);
    }
  };

  const handleSearch = async (keyword: string) => {
    updateLoading(true);
    try {
      const response = await apiClient.get<FetchGamesResponse>(
        `/games?search=${keyword}`
      );
      updateGame(response.data.results);
      updateCount(response.data.count);
    } catch (error) {
      updateLoading(true);
      console.error(error);
    } finally {
      updateLoading(false);
    }
  };

  return {
    handleGenreSelect,
    handlePlatformSelect,
    handleOrder,
    handleSearch,
  };
};

export default useGames;
