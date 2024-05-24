import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import Description from "../GameDetail/Description";
import SystemRequirements from "../GameDetail/SystemRequirements";
import { Screenshot } from "../GameDetail/Screenshot";
import Hero from "../GameDetail/Hero";
import Tags from "../GameDetail/Tags";
import Stores from "../GameDetail/Stores";

// Game Info
interface Store {
  id: number;
  name: string;
  domain: string;
  image_background: string;
}

export interface GameStores {
  id: number;
  store: Store;
}

interface Developers {
  id: number;
  name: string;
}

export interface GameGenres {
  id: number;
  name: string;
}

interface Tags {
  id: number;
  name: string;
}

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

export interface GameDetails {
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
  tags: Tags[];
  genres: GameGenres[];
  metacritic: number;
  stores: GameStores[];
  developers: Developers[];
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

  const [gameDetail, setGameDetail] = useState<GameDetails>();
  const [screenshot, setScreenshot] = useState<Screenshots[]>([]);

  useEffect(() => {
    apiClient.get<GameDetails>(`/games/${id}`).then((res) => {
      setGameDetail(res.data);
      console.log(res.data);
    });
    apiClient
      .get<ScreenshotResponse>(`/games/${id}/screenshots`)
      .then((res) => {
        setScreenshot(res.data.results);
      });
  }, []);

  return (
    <>
      <Navbar />
      {gameDetail && (
        <div>
          <Hero gameDetail={gameDetail} />

          <div className="container mx-auto text-white mt-5">
            <div className="grid grid-cols-3 justify-between gap-10">
              {/* Description */}
              <div className="col-span-2">
                <Description description={gameDetail.description} />
              </div>
              <div className="mt-10 bg-zinc-900 rounded p-4">
                <Stores store={gameDetail} />
              </div>
            </div>

            {screenshot && <Screenshot screenshots={screenshot} />}

            {Object.keys(gameDetail.platforms[0].requirements).length != 0 && (
              <SystemRequirements
                minimum={gameDetail.platforms[0].requirements.minimum}
                recommended={gameDetail.platforms[0].requirements.recommended}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GameDetail;
