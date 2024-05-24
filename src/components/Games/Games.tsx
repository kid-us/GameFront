import { Link } from "react-router-dom";
import PlatformIcons from "./PlatformIcons";
import { useGameStore } from "../../store/useGamesStore";
import { photo } from "../../assets/img";

const Games = () => {
  const { game, loading } = useGameStore();

  return (
    <>
      {/* Games */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 md:gap-4 gap-2">
        {loading ? (
          [...Array(20)].map((_, index) => (
            <div key={index} className="animate-blink shadow-xl mb-4">
              <div className="relative">
                <div className="lg:h-[290px] md:h-[300px] h-[200px] w-full rounded-t bg-zinc-700" />
                <div className="absolute bg-zinc-600 rounded-b-full top-0 right-2 h-9 w-5"></div>
              </div>
              <div className="pt-2 pb-2 rounded-b">
                <div className="flex justify-between">
                  <h6 className="text-lg mb-2 text-nowrap w-full rounded bg-zinc-700 h-11"></h6>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="col-span-3 bg-zinc-700 w-full h-9 rounded"></div>
                  <div className="bg-zinc-700 w-full h-9 rounded"></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            {game.map((game) => (
              <Link
                className="shadow-sm shadow-teal-800 transition ease-in-out delay-150 hover:-translate-y-2 duration-500 hover:shadow-md hover:shadow-teal-500  mb-3"
                key={game.id}
                to={`/${game.id}`}
              >
                <div className="shadow-xl mb-">
                  <div className="relative">
                    <img
                      src={
                        game.background_image ? game.background_image : photo
                      }
                      className="aspect-square object-cover lg:h-[290px] md:h-[300px] h-[200px] w-full rounded-t"
                      alt="Games Image"
                    />
                    <div className="absolute top-0 w-full glass-effect-no-blur h-full"></div>
                    <div className="absolute bg-teal-400 rounded-b-full top-0 right-2 text-black px-1 pb-1 text-center text-sm">
                      <p className="bi-star-fill"></p>
                      <p>{game.rating.toFixed(0)}</p>
                    </div>
                  </div>
                  <div className="pt-2 px-2 pb-2 bg2 text-white rounded-b">
                    <div className="flex justify-between">
                      <h6 className="text-lg mb-2 text-nowrap w-52 overflow-hidden">
                        {game.name}
                      </h6>
                    </div>
                    <div className="grid grid-cols-4">
                      <div className="col-span-3 text-xs w-2/3 overflow-hidden">
                        <p className="text-xs font-poppins text-gray-600">
                          Platforms
                        </p>
                        <div className="flex space-x-2 mt-2">
                          <PlatformIcons
                            platform={game.parent_platforms.map(
                              (p) => p.platform
                            )}
                          />
                        </div>
                      </div>

                      <div className="lg:text-xs md:text-xs">
                        <p className="font-poppins text-gray-600 text-nowrap overflow-hidden text-[8.5px]">
                          Play Time
                        </p>
                        <p className="text-center font-mono mt-2 text-xs">
                          {game.playtime} hr
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
      <div className="flex justify-center my-8">
        <button className="bg-teal-600 rounded-md te py-2 shadow shadow-zinc-50 px-10 text-zinc-900">
          Load More
        </button>
      </div>
    </>
  );
};

export default Games;
