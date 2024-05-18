import { useState } from "react";
import { callofduty, far6, forza6 } from "../assets/img";

const Games = () => {
  const [filter, setFilter] = useState(false);
  return (
    <>
      <div className="col-span-5 font-semibold mx-7">
        {/* Large device Filter*/}
        <div className="lg:block md:block hidden text- my-6 shadow-xl rounded px-4 py-3">
          <p className="text-sm">
            <span className="bi-filter-left text-xl"></span> Filter by:
            <span className="text-teal-950 text-xl "> Years</span>
          </p>
        </div>

        {/* Small Device  Genres*/}
        <div
          className={`flex relative justify-between mb-8 lg:hidden mt-5
          ${filter && "sticky top-28"}
          `}
        >
          {!filter && (
            <div>
              <h1 className="font-bold  bi-dpad-fill text-2xl"> Games</h1>
              <p className="text-sm font-semibold mt-2">420 Results</p>
            </div>
          )}
          <div>
            {!filter && (
              <p
                onClick={() => setFilter(true)}
                className="bi-filter-right text-3xl mt-2 border rounded px-2 bg-teal-950 text-white"
              ></p>
            )}
          </div>
          {filter && (
            <>
              <div className="overlay-bg"></div>
              <div className="animate__animated animate__fadeIn absolute h-[100vh] bg-white z-10 w-[80%] border-2 -right-7 top-0 rounded p-4">
                <p
                  onClick={() => setFilter(false)}
                  className="absolute -top-3 rounded-full bg-teal-950 h-6 w-6 -left-4 text-center text-white mt-1 bi-arrow-right"
                ></p>
                <p className="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Natus, ullam sapiente! Tempora, quae aspernatur libero porro
                  omnis eius quibusdam atque veniam nostrum ea sapiente
                  molestias saepe iusto accusantium repellat quas. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Ratione totam
                  delectus officiis inventore corrupti soluta vero deserunt
                  natus accusantium debitis voluptates provident aspernatur
                  optio, architecto reiciendis fugit, excepturi hic est.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Games */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 md:gap-4 gap-2">
          <div className="rounded-lg shadow-lg shadow-zinc-900 mb-1 lg:h-[390px] md:h-[350px] h-[280px] bg-zinc-950">
            <div className="">
              <img
                src={callofduty}
                className="aspect-square object-cover lg:h-[300px] md:h-[300px] h-[200px] w-full rounded shadow-lg"
                alt=""
              />
            </div>
            <div className="mt-3 px-2">
              <h1 className="text-xl text-white mb-2">Far Cry 6</h1>
              <p className="text-cyan-700 space-x-3">
                <span className="bi-microsoft text-lg"></span>
                <span className="bi-apple text-2xl"></span>
                <span className="bi-xbox  text-xl"></span>
                <span className="bi-playstation text-2xl"></span>
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg shadow-zinc-900 mb-1 lg:h-[390px] md:h-[350px] h-[280px] bg-zinc-950">
            <div className="">
              <img
                src={callofduty}
                className="aspect-square object-cover lg:h-[300px] md:h-[300px] h-[200px] w-full rounded shadow-lg"
                alt=""
              />
            </div>
            <div className="mt-3 px-2">
              <h1 className="text-xl text-white mb-2">Far Cry 6</h1>
              <p className="text-cyan-700">
                <span className="bi-microsoft text-lg"></span>
                <span className="bi-apple  mx-3 text-2xl"></span>
                <span className="bi-xbox  text-xl"></span>
                <span className="bi-playstation  mx-3 text-2xl"></span>
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg shadow-zinc-900 mb-1 lg:h-[390px] md:h-[350px] h-[280px] bg-zinc-950">
            <div className="">
              <img
                src={callofduty}
                className="aspect-square object-cover lg:h-[300px] md:h-[300px] h-[200px] w-full rounded shadow-lg"
                alt=""
              />
            </div>
            <div className="mt-3 px-2">
              <h1 className="text-xl text-white mb-2">Far Cry 6</h1>
              <p className="text-cyan-700">
                <span className="bi-microsoft text-lg"></span>
                <span className="bi-apple  mx-3 text-2xl"></span>
                <span className="bi-xbox  text-xl"></span>
                <span className="bi-playstation  mx-3 text-2xl"></span>
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg shadow-zinc-900 mb-1 lg:h-[390px] md:h-[350px] h-[280px] bg-zinc-950">
            <div className="">
              <img
                src={forza6}
                className="aspect-square object-cover lg:h-[300px] md:h-[300px] h-[200px] w-full rounded shadow-lg"
                alt=""
              />
            </div>
            <div className="mt-3 px-2">
              <h1 className="text-xl text-white mb-2">Far Cry 6</h1>
              <p className="text-cyan-700">
                <span className="bi-microsoft text-lg"></span>
                <span className="bi-apple mx-3 text-2xl"></span>
                <span className="bi-xbox text-xl"></span>
                <span className="bi-playstation mx-3 text-2xl"></span>
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg shadow-zinc-900 mb-1 lg:h-[390px] md:h-[350px] h-[280px] bg-zinc-950">
            <div className="">
              <img
                src={forza6}
                className="aspect-square object-cover lg:h-[300px] md:h-[300px] h-[200px] w-full rounded shadow-lg"
                alt=""
              />
            </div>
            <div className="mt-3 px-2">
              <h1 className="text-xl text-white mb-2">Far Cry 6</h1>
              <p className="text-cyan-700">
                <span className="bi-microsoft text-lg"></span>
                <span className="bi-apple mx-3 text-2xl"></span>
                <span className="bi-xbox text-xl"></span>
                <span className="bi-playstation mx-3 text-2xl"></span>
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg shadow-zinc-900 mb-1 lg:h-[390px] md:h-[350px] h-[280px] bg-zinc-950">
            <div className="">
              <img
                src={forza6}
                className="aspect-square object-cover lg:h-[300px] md:h-[300px] h-[200px] w-full rounded shadow-lg"
                alt=""
              />
            </div>
            <div className="mt-3 px-2">
              <h1 className="text-xl text-white mb-2">Far Cry 6</h1>
              <p className="text-cyan-700">
                <span className="bi-microsoft text-lg"></span>
                <span className="bi-apple mx-3 text-2xl"></span>
                <span className="bi-xbox text-xl"></span>
                <span className="bi-playstation mx-3 text-2xl"></span>
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg shadow-zinc-900 mb-1 lg:h-[390px] md:h-[350px] h-[280px] bg-zinc-950">
            <div className="">
              <img
                src={far6}
                className="aspect-square object-cover lg:h-[300px] md:h-[300px] h-[200px] w-full rounded shadow-lg"
                alt=""
              />
            </div>
            <div className="mt-3 px-2">
              <h1 className="text-xl text-white mb-2">Far Cry 6</h1>
              <p className="text-cyan-700">
                <span className="bi-microsoft text-lg"></span>
                <span className="bi-apple mx-3 text-2xl"></span>
                <span className="bi-xbox text-xl"></span>
                <span className="bi-playstation mx-3 text-2xl"></span>
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg shadow-zinc-900 mb-1 lg:h-[390px] md:h-[350px] h-[280px] bg-zinc-950">
            <div className="">
              <img
                src={far6}
                className="aspect-square object-cover lg:h-[300px] md:h-[300px] h-[200px] w-full rounded shadow-lg"
                alt=""
              />
            </div>
            <div className="mt-3 px-2">
              <h1 className="text-xl text-white mb-2">Far Cry 6</h1>
              <p className="text-cyan-700">
                <span className="bi-microsoft text-lg"></span>
                <span className="bi-apple mx-3 text-2xl"></span>
                <span className="bi-xbox text-xl"></span>
                <span className="bi-playstation mx-3 text-2xl"></span>
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg shadow-zinc-900 mb-1 lg:h-[390px] md:h-[350px] h-[280px] bg-zinc-950">
            <div className="">
              <img
                src={far6}
                className="aspect-square object-cover lg:h-[300px] md:h-[300px] h-[200px] w-full rounded shadow-lg"
                alt=""
              />
            </div>
            <div className="mt-3 px-2">
              <h1 className="text-xl text-white mb-2">Far Cry 6</h1>
              <p className="text-cyan-700">
                <span className="bi-microsoft text-lg"></span>
                <span className="bi-apple mx-3 text-2xl"></span>
                <span className="bi-xbox text-xl"></span>
                <span className="bi-playstation mx-3 text-2xl"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
