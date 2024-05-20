// import { Link } from "react-router-dom";
import Filter from "./Filter/Filter";
import Games from "./Games/Games";
import Genres from "./Genres/Genres";
import { useGameCountStore } from "../store/useGameCountStore";

const Hero = () => {
  const { count } = useGameCountStore();
  return (
    <>
      <div className="grid lg:grid-cols-6 md:grid-cols-6 text-white">
        {/* Genres */}
        <div className="container-fluid shadow-xl font-semibold lg:block md:hidden hidden border-gray-400-700 me-5 py-10">
          <h1 className="font-bold  bi-dpad-fill text-2xl"> Games</h1>
          <p className="text-sm font-semibold mt-2 ">
            <span className="font-mono me-2 text-teal-500 text-lg">
              {count}
            </span>
            Results
          </p>
          <hr className="my-5" />
          <div className="sticky top-24">
            <Genres />
          </div>
        </div>

        {/* Games */}
        <div className="col-span-5 font-semibold lg:px-7 mx-2 games-bg">
          <Filter />
          <Games />
        </div>
      </div>
    </>
  );
};

export default Hero;
