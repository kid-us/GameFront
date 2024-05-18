import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import { Link } from "react-router-dom";

interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  rating: number;
  playtime: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <div className="col-span-5 font-semibold mx-7 mt-5">
        {/* Games */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 md:gap-4 gap-2">
          {games.map((game) => (
            <div
              key={game.id}
              className="rounded-lg shadow-lg shadow-zinc-900 mb-1 lg:h-[390px] md:h-[350px] h-[280px] bg-zinc-950"
            >
              <div className="">
                <img
                  src={game.background_image}
                  className="aspect-square object-cover lg:h-[300px] md:h-[300px] h-[200px] w-full rounded shadow-lg"
                  alt=""
                />
              </div>
              <div className="mt-3 px-2">
                <h1 className="text-xl text-white mb-2">{game.name}</h1>
                <p className="text-cyan-700 space-x-3">
                  <span className="bi-microsoft text-lg"></span>
                  <span className="bi-apple text-2xl"></span>
                  <span className="bi-xbox  text-xl"></span>
                  <span className="bi-playstation text-2xl"></span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Games;
