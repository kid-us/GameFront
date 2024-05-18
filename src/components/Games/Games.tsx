import { useEffect, useState } from "react";
import api from "../../services/api";

interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  rating: number;
  playtime: number;
}

interface FetchGames {
  count: number;
  results: Game[];
}

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get<FetchGames>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <div className="col-span-5 font-semibold mx-7">
        {/* Games */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 md:gap-4 gap-2">
          <div className="rounded-lg shadow-lg shadow-zinc-900 mb-1 lg:h-[390px] md:h-[350px] h-[280px] bg-zinc-950">
            <div className="">
              <img
                src={callofduty}
                className="aspect-square object-cover lg:h-[300px] md:h-[300px] h-[200px] w-full rounded shadow-lg"
                alt=""
              />
            </div>
            <div className="mt-3 px-2">
              <h1 className="text-xl text-white mb-2">Far Cry 6</h1>
              <p className="text-cyan-700 space-x-3">
                <span className="bi-microsoft text-lg"></span>
                <span className="bi-apple text-2xl"></span>
                <span className="bi-xbox  text-xl"></span>
                <span className="bi-playstation text-2xl"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
