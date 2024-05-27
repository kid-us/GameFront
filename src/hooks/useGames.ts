import { useEffect } from "react";
import apiClient from "../services/apiClient";
import { useGameStore } from "../store/useGamesStore";
import { useGameCountStore } from "../store/useGameCountStore";
import { useSelectedGenreStore } from "../store/useSelectedGenre";
import { useLocation } from "react-router-dom";

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
  next: string | null;
  previous: string | null;
  results: Game[];
}

const useGames = () => {
  const location = useLocation();

  const { updateGame, updateLoading, updateNext, updatePrevious } =
    useGameStore();
  const { updateCount } = useGameCountStore();
  const { setSelectedGenre } = useSelectedGenreStore();

  // Get Games
  useEffect(() => {
    // Get the current URL
    var currentURL = window.location.href;
    var match = currentURL.match(/[?&]page=(\d+)/);

    const fetchData = async (url: string) => {
      updateLoading(true);
      try {
        const response = await apiClient.get<FetchGamesResponse>(`${url}`);
        updateGame(response.data.results);
        updateCount(response.data.count);
        updateNext(response.data.next);
        updatePrevious(response.data.previous);
      } catch (error) {
        updateLoading(true);
        console.error(error);
      } finally {
        updateLoading(false);
      }
    };

    // Check if a match is found
    if (match !== null) {
      var pageValue = match[1];
      fetchData(
        `/games?key=675af585f19843d596b1f429b55d94e7&page=${pageValue}`
      );
    } else {
      fetchData("/games");
    }
  }, []);

  // Games selected by Genres
  const handleGenreSelect = async (id: number) => {
    updateLoading(true);
    setSelectedGenre(id);
    try {
      const response = await apiClient.get<FetchGamesResponse>(
        `/games?genres=${id}`
      );
      updateGame(response.data.results);
      updateCount(response.data.count);
      updateNext(response.data.next);
      updatePrevious(response.data.previous);
    } catch (error) {
      updateLoading(true);
      console.error(error);
    } finally {
      updateLoading(false);
    }
  };

  // Games selected by Platforms
  const handlePlatformSelect = async (id: number) => {
    updateLoading(true);
    try {
      const response = await apiClient.get<FetchGamesResponse>(
        `/games?platforms=${id}`
      );
      updateGame(response.data.results);
      updateCount(response.data.count);
      updateNext(response.data.next);
      updatePrevious(response.data.previous);
    } catch (error) {
      updateLoading(true);
      console.error(error);
    } finally {
      updateLoading(false);
    }
  };

  // Games selected by Orders
  const handleOrder = async (value: string) => {
    updateLoading(true);
    try {
      const response = await apiClient.get<FetchGamesResponse>(
        `/games?ordering=${value}`
      );
      updateGame(response.data.results);
      updateCount(response.data.count);
      updateNext(response.data.next);
      updatePrevious(response.data.previous);
    } catch (error) {
      updateLoading(true);
      console.error(error);
    } finally {
      updateLoading(false);
    }
  };

  // Games Search
  const handleSearch = async (keyword: string) => {
    updateLoading(true);
    try {
      const response = await apiClient.get<FetchGamesResponse>(
        `/games?search=${keyword}`
      );
      updateGame(response.data.results);
      updateCount(response.data.count);
      updateNext(response.data.next);
      updatePrevious(response.data.previous);
    } catch (error) {
      updateLoading(true);
      console.error(error);
    } finally {
      updateLoading(false);
    }
  };

  // Next Games Page
  const handleNextPageGames = async (url: string | null) => {
    if (url) {
      console.log(url);

      var currentURL = window.location.href;
      var match = url.match(/page=(\d+)/);

      if (match !== null) {
        var pageValue = match[1];
        var updatedURL = currentURL.replace(/[?&]page=\d+/, "");
        var newURL = updatedURL + "?page=" + pageValue;
        window.location.href = newURL;
      }

      updateLoading(true);
      try {
        const response = await apiClient.get<FetchGamesResponse>(url);
        updateGame(response.data.results);
        updateNext(response.data.next);
        updatePrevious(response.data.previous);
      } catch (error) {
        updateLoading(true);
        console.error(error);
      } finally {
        updateLoading(false);
      }
    }
  };

  // Previous Games Page
  const handlePreviousPageGames = async (url: string | null) => {
    if (url) {
      // https://api.rawg.io/api/games?genres=51&key=675af585f19843d596b1f429b55d94e7&page=2
      var currentURL = window.location.href;
      var match = url.match(/page=(\d+)/);

      if (match !== null) {
        var pageValue = match[1];
        var updatedURL = currentURL.replace(/[?&]page=\d+/, "");
        const link = new URLSearchParams(url.split("?")[1]); // Extract query parameters from the URL
        console.log(link.get("pages"), link.get("genres"));

        var newURL = updatedURL + "?page=" + pageValue;
        window.location.href = newURL;
      } else {
        window.location.href = "/";
      }

      updateLoading(true);
      try {
        const response = await apiClient.get<FetchGamesResponse>(url);

        updateGame(response.data.results);
        updateNext(response.data.next);
        updatePrevious(response.data.previous);
      } catch (error) {
        updateLoading(true);
        console.error(error);
      } finally {
        updateLoading(false);
      }
    }
  };

  return {
    handleGenreSelect,
    handlePlatformSelect,
    handleOrder,
    handleSearch,
    handleNextPageGames,
    handlePreviousPageGames,
  };
};

export default useGames;
