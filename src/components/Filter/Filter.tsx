import { useState } from "react";
import Genres from "../Genres/Genres";
import { useGameCountStore } from "../../store/useGameCountStore";
import PlatformSelector from "./PlatformSelector";

const Filter = () => {
  const [filter, setFilter] = useState(false);
  const { count } = useGameCountStore();
  return (
    <>
      {/* Large device Filter*/}
      <div className="lg:block md:block hidden rounded pr-4 py-3 text-white mt-5 mb-9">
        <div className="flex justify-between">
          <PlatformSelector />
          <div className="w-72 relative">
            <input
              type="text"
              className=" w-full ps-10 py-2 rounded-xl bg-zinc-800 text-white focus:outline-none-0 outline-none font-poppins shadow-sm shadow-gray-500 placeholder:text-sm"
              placeholder="Search Games"
            />
            <span className="absolute bi-search left-3 top-2 text-zinc-400"></span>
          </div>
        </div>
      </div>

      {/* Small Device  Genres*/}
      <div
        className={`flex relative justify-between mb-8 lg:hidden mt-5
          ${filter && "sticky top-24 z-50"}
          `}
      >
        {!filter && (
          <div>
            <h1 className="font-bold  bi-dpad-fill text-2xl"> Games</h1>
            <p className="text-sm font-semibold mt-2">
              <span className="font-mono me-2 text-teal-500 text-lg">
                {count}
              </span>
              Results
            </p>
          </div>
        )}
        <div>
          {!filter && (
            <p
              onClick={() => setFilter(true)}
              className="bi-filter-right text-3xl mt-2 rounded px-2 bg-teal-800 text-white"
            ></p>
          )}
        </div>
        {filter && (
          <>
            <div className="overlay-bg"></div>
            <div className="animate__animated animate__fadeIn absolute h-[85vh] games-bg z-10 w-[70%] -right-2 top-0 rounded pt-5">
              <p
                onClick={() => setFilter(false)}
                className="absolute -top-3 rounded-full bg-teal-50 h-6 w-6 -left-4 text-center text-black font-bold mt-1 bi-arrow-right"
              ></p>

              <div className="px-6">
                <p className="shadow-xl shadow-zinc-800 py-2 px-5 rounded-md cursor-pointer mb-7 text-sm">
                  <span className="text-xl"></span>
                  Filter By :<span className="text-teal-500 ms-2">Years </span>
                  <span className="bi-caret-down-fill text-xs text-teal-500"></span>
                </p>
                <div className="overflow-scroll h-[70vh]">
                  <Genres />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Filter;
