import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import PlatformIcons from "./PlatformIcons";
import Description from "../GameDetail/Description";

// Trailer
interface Video {
  vid: string;
  max: string;
}

interface TrailerData {
  data: Video;
  id: number;
  preview: string;
}

interface TrailerResponse {
  results: TrailerData[];
}

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
interface Screenshot {
  id: number;
  image: string;
}

interface ScreenshotResponse {
  results: Screenshot[];
}

const GameDetail = () => {
  const { id } = useParams();

  const [gameDetail, setGameDetail] = useState<GameDetail>();
  const [trailer, setTrailer] = useState<TrailerData[]>([]);
  const [screenshot, setScreenshot] = useState<Screenshot[]>([]);

  const [view, setView] = useState("image");

  useEffect(() => {
    apiClient.get<GameDetail>(`/games/${id}`).then((res) => {
      setGameDetail(res.data);
      console.log(res.data);
    });
    apiClient.get<TrailerResponse>(`/games/${id}/movies`).then((res) => {
      setTrailer(res.data.results);
      console.log(res.data.results);
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
                  {view === "image" && (
                    <img
                      src={gameDetail.background_image}
                      alt="Game"
                      className="lg:aspect-video aspect-square sm:aspect-square shadow shadow-teal-200 h-[90%] w-full object-cover rounded-lg"
                    />
                  )}
                  {view === "video" && trailer && (
                    <video
                      src={trailer[0].data.max}
                      className="lg:aspect-video aspect-square sm:aspect-square shadow shadow-teal-200 h-[90%] w-full object-cover rounded-lg"
                      muted
                      autoPlay
                      loop
                    ></video>
                  )}
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
              <div className="flex justify-center gap-3">
                <div className="bg-white w-[10%]">
                  <img
                    src={gameDetail.background_image}
                    alt="Preview"
                    className="cursor-pointer hover:grayscale-[0] grayscale-[1] rounded shadow-sm shadow-teal-50"
                    onClick={() => setView("image")}
                  />
                </div>
                <div className="w-[10%]">
                  <div
                    className="relative cursor-pointer"
                    onClick={() => setView("video")}
                  >
                    <img
                      src={trailer[0].preview}
                      alt="Preview"
                      className="hover:grayscale-[0] grayscale-[1] rounded shadow-sm shadow-teal-50"
                    />
                    <span className="absolute w-full top-0 bi-play-fill text-5xl text-center mt-3"></span>
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
            <h1 className="mt-10 text-lg">Screenshots</h1>
            <div className="grid grid-cols-6 gap-3 my-5">
              {screenshot &&
                screenshot.map((image) => (
                  <div key={image.id}>
                    <img
                      src={image.image}
                      alt="Screenshot"
                      className="aspect-square object-cover rounded"
                    />
                  </div>
                ))}
            </div>

            <p className="font-poppins text-lg my-6">System Requirements</p>
            <div className="grid grid-cols-2 bg-zinc-950 rounded p-14 gap-5 mb-10">
              <div>
                {gameDetail.platforms[0].requirements.minimum
                  .split("\n")
                  .map((line, index) => (
                    <p className="font-poppins text-gray-300" key={index}>
                      {line}
                    </p>
                  ))}
              </div>
              <div>
                {gameDetail.platforms[0].requirements.recommended
                  .split("\n")
                  .map((line, index) => (
                    <p className="font-poppins text-gray-300" key={index}>
                      {line}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GameDetail;
