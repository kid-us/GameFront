// import { Link } from "react-router-dom";
import useGames from "../../hooks/useGames";
import PlatformIcons from "./PlatformIcons";

const Games = () => {
  const games = useGames();

  return (
    <>
      <div className="col-span-5 font-semibold mx-7 mt-5">
        {/* Games */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 md:gap-4 gap-2">
          {games.map((game) => (
            <div
              key={game.id}
              className="rounded-lg shadow-lg shadow-zinc-900 mb-2 lg:h-[390px] md:h-[350px] h-[280px] bg-zinc-950"
            >
              <div>
                <img
                  src={game.background_image}
                  className="aspect-square object-cover lg:h-[300px] md:h-[300px] h-[200px] w-full rounded shadow-lg"
                  alt="Games Image"
                />
              </div>
              <div className="mt-3 px-2">
                <h1 className="text-xl text-white mb-2 text-nowrap overflow-hidden">
                  {game.name}
                </h1>

                <PlatformIcons
                  platform={game.parent_platforms.map((p) => p.platform)}
                />
                {/* {game.parent_platforms.map(({ platform }) => (
                  <p className="text-cyan-700 space-x-3">
                    {platform.name}
                    <span className="bi-microsoft text-lg"></span>
                    <span className="bi-apple text-2xl"></span>
                    <span className="bi-xbox  text-xl"></span>
                    <span className="bi-playstation text-2xl"></span>
                  </p>
                ))} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Games;
