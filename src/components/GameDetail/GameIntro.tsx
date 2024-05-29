import optimizedImg from "../../services/image-url";
import { GameDetails } from "../Games/GameDetail";
import PlatformIcons from "../Games/PlatformIcons";
import GameGenres from "./GameGenres";

interface Props {
  gameDetail: GameDetails;
}

const Hero = ({ gameDetail }: Props) => {
  const handleRate = (rate: string) => {
    const rating = parseInt(rate);
    if (rating === 0) {
      return null;
    }

    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} className="bi-star-fill text-yellow-400"></span>
      );
    }
    return <>{stars}</>;
  };

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(to bottom, rgba(1, 1, 1, 0.80), rgba(0, 0, 0, 0.99)), url("${
          gameDetail.background_image_additional
            ? gameDetail.background_image_additional
            : gameDetail.background_image
        }")`,
        backgroundPosition: "center top",
        paddingTop: "90px",
      }}
    >
      <div className="lg:container lg:mx-auto text-white ">
        <h1 className="text-white lg:text-xl text-xl mb-6 mx-2">
          {gameDetail.name}
        </h1>

        {/* Info */}
        <div className="lg:flex lg:gap-5 justify-between">
          <div className="lg:w-[80%] lg:mx-0 mx-2">
            <img
              src={gameDetail.background_image}
              alt="Game"
              className="lg:aspect-video aspect-square sm:aspect-square shadow shadow-teal-200 h-[90%] w-full object-cover rounded-lg"
            />
          </div>
          <div className="lg:w-[20%] bg-zinc-950 rounded-md px-5 py-5 text-sm mb-14">
            <p className="mb-5 font-semibold"># Preview</p>
            <GameGenres genres={gameDetail.genres} />
            <p className="space-x-2 font-semibold text-gray-400">
              Rate {handleRate(gameDetail.rating.toFixed(0))}
              <span className="font-mono">{gameDetail.rating.toFixed(1)}</span>
            </p>
            <p className="bi-stopwatch font-semibold my-4 text-gray-400">
              &nbsp; Average Playtime
              <span className="text-teal-200 font-bold font-mono">
                {" "}
                {gameDetail.playtime}
              </span>{" "}
              hr
            </p>
            <p className="mb-1 font-semibold mt-5 text-gray-400">Release</p>
            <p className="font-mono font-semibold text-teal-400">
              {gameDetail.released}
            </p>
            <p className="mb-1 font-semibold mt-5 text-gray-400">Publisher</p>
            <p className="text-teal-400 text-sm font-semibold">
              {gameDetail.publishers[0].name}
            </p>
            <img
              src={optimizedImg(gameDetail.background_image_additional)}
              alt="Preview"
              className="rounded mt-8"
            />
            <div className="flex space-x-4 mt-10">
              <PlatformIcons
                platform={gameDetail.parent_platforms.map((p) => p.platform)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
