// import { Link } from "react-router-dom";
import Games from "./Games/Games";
import Genres from "./Genres/Genres";

const Hero = () => {
  return (
    <>
      <div className="grid lg:grid-cols-6 md:grid-cols-6">
        {/* Genres */}
        <div className="container-fluid shadow-xl bg-teal-950 text-white font-semibold lg:block md:block hidden border-gray-400-700 me-5 py-10">
          <h1 className="font-bold  bi-dpad-fill text-2xl"> Games</h1>
          <p className="text-sm font-semibold mt-2">420 Results</p>
          <hr className="my-5" />
          <div className="sticky top-24">
            <Genres />
          </div>
        </div>
        {/* Games */}
        <Games />
      </div>
    </>
  );
};

export default Hero;
