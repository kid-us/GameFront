// import { Link } from "react-router-dom";
import { callofduty, far6, forza6, mafia3 } from "../assets/img";
import Games from "./Games";
import Genres from "./Genres";

const Hero = () => {
  return (
    <>
      <div className="grid lg:grid-cols-6 md:grid-cols-6">
        {/* Genres */}
        <Genres />
        {/* Games */}
        <Games />
      </div>
    </>
  );
};

export default Hero;
