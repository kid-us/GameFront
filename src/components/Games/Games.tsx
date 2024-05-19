import { Link } from "react-router-dom";
import useGames from "../../hooks/useGames";
import PlatformIcons from "./PlatformIcons";

const Games = () => {
  const games = useGames();

  return (
    <>
      <div className="col-span-5 font-semibold mx-7 mt-5">
        <p className="my-4">All Games</p>
        {/* Games */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 md:gap-4 gap-2">
          {games.map((game) => (
            <Link to={`/${game.id}`}>
              <div
                key={game.id}
                className="rounded shadow-md shadow-zinc-500 mb-2"
              >
                <div className="relative">
                  <div className="absolute bg-yellow-500 rounded p-1 -top-1 -left-1">
                    <p className="text-xs font-mono">
                      {game.rating.toFixed(1)}
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={game.background_image}
                    className="aspect-square object-cover lg:h-[290px] md:h-[300px] h-[200px] w-full rounded-t-md"
                    alt="Games Image"
                  />
                </div>
                <div className="mt-3 px-2 pb-2">
                  <h6 className="text-lg mb-2 text-nowrap overflow-hidden">
                    {game.name}
                  </h6>
                  <div className="grid grid-cols-4 mt-2">
                    <div className="col-span-3 text-xs">
                      <p className="text-xs">Release</p>
                      <div className="flex space-x-2 mt-2">
                        <PlatformIcons
                          platform={game.parent_platforms.map(
                            (p) => p.platform
                          )}
                        />
                      </div>
                    </div>
                    <div className="text-xs">
                      <p>Play Time</p>
                      <p className="text-center font-mono mt-2">
                        {game.playtime} hr
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Games;
