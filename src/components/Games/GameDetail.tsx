import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import PlatformIcons from "./PlatformIcons";
import Description from "../GameDetail/Description";
import SystemRequirements from "../GameDetail/SystemRequirements";
import { Screenshot } from "../GameDetail/Screenshot";

// Game Info
interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface Publisher {
  id: number;
  name: string;
}

interface Requirements {
  minimum: string;
  recommended: string;
}

interface PlatformRequirements {
  requirements: Requirements;
}

interface GameDetail {
  id: number;
  name: string;
  background_image: string;
  background_image_additional: string;
  released: string;
  rating: number;
  playtime: number;
  parent_platforms: { platform: Platform }[];
  publishers: Publisher[];
  description: string;
  platforms: PlatformRequirements[];
}

// Screenshot
export interface Screenshots {
  id: number;
  image: string;
}

interface ScreenshotResponse {
  results: Screenshots[];
}

const GameDetail = () => {
  const { id } = useParams();

  const [gameDetail, setGameDetail] = useState<GameDetail>();
  const [screenshot, setScreenshot] = useState<Screenshots[]>([]);

  useEffect(() => {
    apiClient.get<GameDetail>(`/games/${id}`).then((res) => {
      setGameDetail(res.data);
      console.log(res.data);
    });
    apiClient
      .get<ScreenshotResponse>(`/games/${id}/screenshots`)
      .then((res) => {
        setScreenshot(res.data.results);
      });
  }, []);

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
    <>
      <Navbar />
      {gameDetail && (
        <>
          <div
            className=""
            style={{
              backgroundSize: "cover",
              backgroundImage: `linear-gradient(to bottom, rgba(1, 1, 1, 0.80), rgba(0, 0, 0, 0.99)), url("${gameDetail.background_image}")`,
              backgroundPosition: "center top",
              paddingTop: "90px",
            }}
          >
            <div className="container mx-auto text-white">
              <h1 className="text-white text-2xl mb-5">{gameDetail.name}</h1>

              {/* Info */}
              <div className="flex gap-5 justify-between">
                <div className="w-[80%]">
                  <img
                    src={gameDetail.background_image}
                    alt="Game"
                    className="lg:aspect-video aspect-square sm:aspect-square shadow shadow-teal-200 h-[90%] w-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-[20%] bg-zinc-950 rounded-md px-5 py-5 text-sm mb-14">
                  <p className="mb-5 font-semibold">Preview</p>
                  <p className="space-x-2">
                    {handleRate(gameDetail.rating.toFixed(0))}
                    <span className="font-mono">
                      {gameDetail.rating.toFixed(1)}
                    </span>
                  </p>
                  <p className="bi-stopwatch font-semibold my-4">
                    <span className="text-teal-200 font-bold font-mono">
                      {" "}
                      {gameDetail.playtime}
                    </span>{" "}
                    hr
                  </p>
                  <p className="mb-1 font-semibold mt-5">Release</p>
                  <p className="font-mono font-semibold text-gray-400">
                    {gameDetail.released}
                  </p>
                  <p className="mb-1 font-semibold mt-5">Publisher</p>
                  <p className="text-gray-400 text-sm font-semibold">
                    {gameDetail.publishers[0].name}
                  </p>
                  <img
                    src={gameDetail.background_image_additional}
                    alt="Preview"
                    className="rounded mt-8"
                  />
                  <div className="flex space-x-4 mt-10">
                    <PlatformIcons
                      platform={gameDetail.parent_platforms.map(
                        (p) => p.platform
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto text-white mt-5">
            {/* Description */}
            <Description
              name={gameDetail.name}
              description={gameDetail.description}
            />

            {screenshot && <Screenshot screenshots={screenshot} />}

            {Object.keys(gameDetail.platforms[0].requirements).length != 0 && (
              <SystemRequirements
                minimum={gameDetail.platforms[0].requirements.minimum}
                recommended={gameDetail.platforms[0].requirements.recommended}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default GameDetail;
