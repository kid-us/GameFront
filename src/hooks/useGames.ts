import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

export interface Platform {
    id: number;
    name: string;
    slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    released: string;
    rating: number;
    playtime: number;
    parent_platforms: {platform: Platform}[]
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
      apiClient
        .get<FetchGamesResponse>("/games")
        .then((res) => {setGames(res.data.results);} );
    }, []);

    return (games)
}

export default useGames;