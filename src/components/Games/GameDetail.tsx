import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";

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
              backgroundImage: `linear-gradient(to bottom, rgba(1, 1, 1, 0.70), rgba(0, 0, 0, 0.99)), url("${gameDetail.background_image}")`,
              backgroundPosition: "center top",
              paddingTop: "90px",
            }}
          >
            <div className="container mx-auto text-white">
              <h1 className="text-white text-2xl">{gameDetail.name}</h1>
              <div className="flex mb-7 mt-4">
                <p className="space-x-2">
                  {handleRate(gameDetail.rating.toFixed(0))}
                  <span className="font-mono">
                    {gameDetail.rating.toFixed(1)}
                  </span>
                </p>
                <p className="bi-play-fill font-semibold ms-24 text-sm">
                  Play Time{" "}
                  <span className="text-teal-200 font-bold font-mono">
                    {gameDetail.playtime}
                  </span>{" "}
                  hr
                </p>
              </div>
              {/* Info */}
              <div className="flex gap-10 justify-between">
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
                {trailer.length > 0 && (
                  <div className="w-[20%]">
                    <p className="mb-5 font-semibold">Preview</p>
                    <img
                      src={gameDetail.background_image}
                      alt="Preview"
                      className="cursor-pointer hover:grayscale-[0] grayscale-[1] rounded shadow-sm shadow-teal-50"
                      onClick={() => setView("image")}
                    />
                    <div
                      className="relative cursor-pointer"
                      onClick={() => setView("video")}
                    >
                      <img
                        src={trailer[0].preview}
                        alt="Preview"
                        className="hover:grayscale-[0] grayscale-[1] mt-5 rounded shadow-sm shadow-teal-50"
                      />
                      <span className="absolute w-full top-0 glass-effect bi-play-fill text-8xl text-center mt-5"></span>
                    </div>
                    <p className="mb-1 font-semibold mt-5">Release</p>
                    <p className="font-mono text-gray-400">
                      {gameDetail.released}
                    </p>
                    <p className="mb-1 font-semibold mt-5">Publisher</p>
                    <p className="text-gray-400 text-sm font-semibold">
                      {gameDetail.publishers[0].name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="container mx-auto text-white mt-5">
            <h1 className="text-lg mb-5">{gameDetail.name}</h1>
            <p className="font-poppins text-gray-300">
              {gameDetail.description
                .split("<p>Español")[0]
                .replace(/<\/?p>|<br\s*\/?>/g, "")}
            </p>
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
            {/* <p>{`${}`}</p> */}
          </div>
        </>
      )}
    </>
  );
};

export default GameDetail;
