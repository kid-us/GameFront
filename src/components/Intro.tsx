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

  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.05;
    }

    const changeIntro = () => {
      setIntro((prevIntro) => {
        const currentId = prevIntro[0].id;
        const nextId = currentId !== videos.length ? currentId + 1 : 1;
        return videos.filter((video) => video.id === nextId);
      });
    };

    const timer = setTimeout(changeIntro, 5000);

    return () => clearTimeout(timer); // Cleanup the timeout on unmount or before next effect
  }, [intro]);

  const changeImage = (id: number) => {
    setIntro(videos.filter((video) => video.id === id));
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
        <div className="container mx-auto mt-24">
          <div className="lg:grid md:grid lg:grid-cols-12 md:grid-cols-12 gap-4">
            <div className="relative col-span-11 w-full">
              {playVideo && (
                <video
                  ref={videoRef}
                  src={intro[0].src}
                  className="lg:aspect-video aspect-square sm:aspect-square lg:h-[650px] w-full object-cover shadow-2xl shadow-black rounded-lg"
                  muted
                  autoPlay
                ></video>
              )}
              {!playVideo && (
                <div className="relative">
                  <img
                    src={intro[0].cover}
                    className="rounded-lg w-full xl:aspect-auto md:aspect-auto aspect-square object-cover lg:h-[650px] md:h-full h-[400px]"
                    alt="Game Covers"
                  />
                </div>
              )}
              {/* Intro Typos */}
              <div className="absolute w-full bottom-0 shadow-xl shadow-zinc-950 backdrop-blur-sm backdrop-brightness-50">
                <div className="lg:p-10 md:p-2 p-4 py-2 bg-highlight">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <h1 className="lg:text-4xl md:text-3xl text-lg font-bold text-white">
                        {intro[0].name}
                      </h1>
                      <p
                        onClick={() => setPlayVideo(!playVideo)}
                        className="lg:hidden md:hidden sm:block text-teal-500 font-semibold font-poppins text-lg mt-2  mb-3 uppercase cursor-pointer"
                      >
                        <span
                          className={`${
                            playVideo
                              ? "bi-x-lg"
                              : "bi-play-circle-fill md:text-xl text-md"
                          } lg:text-2xl md:text-xl text-md me-2`}
                        ></span>
                        {playVideo ? "Close Trailer" : "Watch Trailer"}
                      </p>
                      <p className="mt-3 text-gray-500">
                        <span className="bi-microsoft lg:text-lg md:text-lg"></span>
                        <span className="bi-apple mx-3 lg:text-2xl md:text-2xl"></span>
                        <span className="bi-xbox lg:text-xl md:text-xl"></span>
                        <span className="bi-playstation mx-3 lg:text-2xl md:text-2xl"></span>
                      </p>
                    </div>
                    <div className="lg:ms-40 lg:mt-0 md:mt-0 mt-10 md:ms-0">
                      <p
                        onClick={() => setPlayVideo(!playVideo)}
                        className="lg:block md:block hidden text-teal-700 font-semibold font-poppins text-xl mt-2  mb-3 uppercase cursor-pointer"
                      >
                        <span
                          className={`${
                            playVideo ? "bi-x-lg" : "bi-play-circle-fill"
                          } text-2xl me-5`}
                        ></span>
                        {playVideo ? "Close Trailer" : "Watch Trailer"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intro Image Buttons */}
            <div className="lg:mt-5 md:mt-5">
              {/* Large and  Medium Device*/}
              <div className="rounded px-1 py-5 lg:block flex  overflow-x-scroll gap-2 ">
                {videos.map((video) => (
                  <img
                    key={video.id}
                    src={video.cover}
                    alt="Covers"
                    className={`object-cover rounded shadow-teal-400 shadow-sm cursor-pointer lg:block md:block hidden mb-5 ${
                      intro[0].id === video.id ? "grayscale-0" : "grayscale"
                    } hover:grayscale-0`}
                    onClick={() => changeImage(video.id)}
                  />
                ))}
                {/* Small Device */}
                <div className="lg:hidden md:hidden flex ms-20 ps-2 gap-4">
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className={`${
                        intro[0].id === video.id ? "bg-white" : "bg-gray-500"
                      } p-1 rounded`}
                      onClick={() => changeImage(video.id)}
                    ></div>
                  ))}
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
