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
    const searchParams = new URLSearchParams(location.search);

    // Get the current URL
    // var currentURL = window.location.href;
    // var match = currentURL.match(/[?&]page=(\d+)/);

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
    if (!searchParams.get("genres") && searchParams.get("page")) {
      // var pageValue = match[1];
      fetchData(
        `/games?key=675af585f19843d596b1f429b55d94e7&page=${searchParams.get(
          "page"
        )}`
      );
    } else if (searchParams.get("genres") && !searchParams.get("page")) {
      fetchData(`/games?genres=${searchParams.get("genres")}`);
    } else if (searchParams.get("genres") && searchParams.get("page")) {
      fetchData(
        `/games?key=675af585f19843d596b1f429b55d94e7?genres=${searchParams.get(
          "genres"
        )}&page=${searchParams.get("page")}`
      );
    } else if (searchParams.get("search")) {
      console.log(searchParams.get("search"));
      fetchData(`/games?search=${searchParams.get("search")}`);
    } else {
      fetchData("/games");
    }
  }, [location]);

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
    window.location.href = `/?search=${keyword}`;
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
      const urls = new URL(window.location.href);
      // Get the genre parameter from the URL
      var currentURL = window.location.href;
      var match = url.match(/page=(\d+)/);

      const genreParam = urls.searchParams.get("genres");

      if (genreParam) {
        if (match !== null) {
          const newUrl = `${urls.origin}${urls.pathname}?genres=${genreParam}`;
          window.location.href = newUrl + `&page=${match[1]}`;
          updateLoading(true);
        }
      } else {
        if (match !== null) {
          var pageValue = match[1];
          var updatedURL = currentURL.replace(/[?&]page=\d+/, "");
          var newURL = updatedURL + "?page=" + pageValue;
          window.location.href = newURL;
          updateLoading(true);
        }
      }
    }
  };

  // Previous Games Page
  const handlePreviousPageGames = async (url: string | null) => {
    if (url) {
      const urls = new URL(window.location.href);
      // Get the genre parameter from the URL
      var currentURL = window.location.href;
      var match = url.match(/page=(\d+)/);

      const genreParam = urls.searchParams.get("genres");
      const pageParam = urls.searchParams.get("page");

      // Games with Genres
      if (genreParam) {
        if (genreParam && pageParam == "2") {
          window.location.href = `${urls.origin}${urls.pathname}?genres=${genreParam}`;
          updateLoading(true);
        } else {
          if (match !== null) {
            const newUrl = `${urls.origin}${urls.pathname}?genres=${genreParam}`;
            window.location.href = newUrl + `&page=${match[1]}`;
            updateLoading(true);
          }
        }
      } else {
        // Games without Genres
        if (match !== null) {
          var pageValue = match[1];
          var updatedURL = currentURL.replace(/[?&]page=\d+/, "");
          var newURL = updatedURL + "?page=" + pageValue;
          window.location.href = newURL;
          updateLoading(true);
        } else {
          window.location.href = "/";
          updateLoading(true);
        }
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
