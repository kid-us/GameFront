// import { Link } from "react-router-dom";
import Games from "./Games/Games";
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
