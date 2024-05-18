import { useEffect, useRef, useState } from "react";
import { videos } from "../services/video";
import { farcry } from "../assets/video";
import { far6 } from "../assets/img";

const Intro = () => {
  const [intro, setIntro] = useState([
    {
      id: 1,
      name: "Far Cry 6",
      src: farcry,
      cover: far6,
    },
  ]);
  const [hover, setHover] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  //   let hoverTimeout: number | undefined;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.05;
    }
  }, [intro]);

  const handleNextVideo = (id: number) => {
    setHover(false);
    if (id !== videos.length) {
      setIntro(videos.filter((video) => video.id === id + 1));
    }
  };

  const handlePreviousVideo = (id: number) => {
    setHover(false);
    if (id !== 1) {
      setIntro(videos.filter((video) => video.id === id - 1));
    }
  };

  return (
    <>
      <div
        style={{
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(to bottom, rgba(1, 1, 1, 0.70), rgba(0, 0, 0, 0.99)), url("${intro[0].cover}")`,
          backgroundPosition: "center top",
          padding: "10px",
        }}
      >
        <div className="container mx-auto mt-20">
          <div className="relative">
            {playVideo && (
              <video
                ref={videoRef}
                src={intro[0].src}
                className="lg:aspect-video aspect-square sm:aspect-square lg:h-[650px] w-full object-cover shadow-2xl shadow-black rounded-lg"
                // muted
                autoPlay
                onEnded={() => handleNextVideo(intro[0].id)}
              ></video>
            )}
            {!playVideo && (
              <div className="relative">
                <img
                  src={intro[0].cover}
                  className="rounded-lg w-full xl:aspect-auto md:aspect-auto aspect-square object-cover lg:h-[650px]"
                  alt="Game Covers"
                />
                {/* {hover && (
                  <div className="absolute transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none top-0 w-full glass-effect rounded-lg h-full text-center">
                    <p className="lg:mt-72 md:mt-44 mt-52 text-white text-7xl">
                      <span
                        className="cursor-pointer bi-play-circle-fill"
                        onClick={() => setPlayVideo(true)}
                      ></span>
                    </p>
                  </div>
                )} */}
              </div>
            )}
            <div className="absolute w-full bottom-0 shadow-xl shadow-zinc-950 backdrop-blur-sm backdrop-brightness-50">
              <div className="lg:p-10 md:p-2 p-4 py-2 bg-highlight">
                <div className="grid grid-cols-3">
                  <div className="col-span-2">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-white">
                      {intro[0].name}
                    </h1>
                    <p
                      onClick={() => setPlayVideo(!playVideo)}
                      className="lg:hidden md:hidden sm:block text-teal-950 font-semibold font-poppins text-lg mt-2  mb-3 uppercase cursor-pointer"
                    >
                      <span
                        className={`${
                          playVideo ? "bi-x-lg" : "bi-play-circle-fill"
                        } lg:text-2xl me-2`}
                      ></span>
                      {playVideo ? "Close Trailer" : "Watch Trailer"}
                    </p>
                    <p className="mt-3 text-gray-500">
                      <span className="bi-microsoft  text-lg"></span>
                      <span className="bi-apple  mx-3 text-2xl"></span>
                      <span className="bi-xbox  text-xl"></span>
                      <span className="bi-playstation  mx-3 text-2xl"></span>
                    </p>
                  </div>
                  <div className="lg:ms-48 lg:mt-0 md:mt-0 mt-10 md:ms-0 ms-10">
                    <p
                      onClick={() => setPlayVideo(!playVideo)}
                      className="lg:block md:block hidden text-amber-700 font-semibold font-poppins text-xl mt-2  mb-3 uppercase cursor-pointer"
                    >
                      <span
                        className={`${
                          playVideo ? "bi-x-lg" : "bi-play-circle-fill"
                        } text-2xl me-5`}
                      ></span>
                      {playVideo ? "Close Trailer" : "Watch Trailer"}
                    </p>
                    <button
                      onClick={() => handlePreviousVideo(intro[0].id)}
                      className="bg-cyan-200 rounded font-semibold py-1 px-2 bi-arrow-left-circle-fill"
                    ></button>
                    <button
                      onClick={() => handleNextVideo(intro[0].id)}
                      className="bg-cyan-200 rounded font-semibold py-1 px-2 ms-4 bi-arrow-right-circle-fill"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
