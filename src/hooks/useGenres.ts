import { useEffect, useState } from "react"
import apiClient from "../services/apiClient";


interface Genres {
    id: number;
    name: string;
    games_count: number;
    image_background: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genres[];
}

const useGenres = () => {
 const [genres, setGenres] = useState<Genres[]>();

 useEffect(()=> {
    apiClient.get<FetchGenresResponse>("/genres").then((res) => setGenres(res.data.results))
 },[])
    
 return (genres);

}

export default useGenres