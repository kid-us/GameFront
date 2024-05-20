import { Link } from "react-router-dom";
import useGames from "../../hooks/useGames";
import PlatformIcons from "./PlatformIcons";

const Games = () => {
  const games = useGames();

  return (
    <>
      {/* Games */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 md:gap-4 gap-2">
        {games.map((game) => (
          <Link key={game.id} to={`/${game.id}`}>
            <div className="shadow-md mb-2">
              <div>
                <img
                  src={game.background_image}
                  className="aspect-square object-cover lg:h-[290px] md:h-[300px] h-[200px] w-full rounded-t"
                  alt="Games Image"
                />
              </div>
              <div className="pt-2 px-2 pb-2 bg-white text-black rounded-b">
                <div className="flex justify-between">
                  <h6 className="text-lg mb-2 text-nowrap w-52 overflow-hidden">
                    {game.name}
                  </h6>
                </div>
                <div className="grid grid-cols-4">
                  <div className="col-span-3 text-xs">
                    <p className="text-xs font-poppins text-gray-600">
                      Platforms
                    </p>
                    <div className="flex space-x-2 mt-2">
                      <PlatformIcons
                        platform={game.parent_platforms.map((p) => p.platform)}
                      />
                    </div>
                  </div>
                  <div className="text-xs">
                    <p className="font-poppins text-gray-600">Play Time</p>
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
    </>
  );
};

export default Games;
