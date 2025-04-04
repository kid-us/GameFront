import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { logo } from "../../assets";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        show ? "bg-zinc-950" : "nav-bg"
      } fixed z-10 w-full py-4 hover:bg-zinc-950 `}
    >
      <div className="container mx-auto">
        <div className={`flex flex-shrink-0 justify-between lg:mx-0 mx-6`}>
          <div className="flex justify-start gap-28">
            <div>
              <Link to="/" className="flex text-white font-poppins text-lg">
                <img src={logo} className="w-11 me-4"></img> GameFront
              </Link>
            </div>
          </div>

          <div className="text-white font-semibold lg:hidden md:hidden">
            <p
              onClick={() => setShowModal(!showModal)}
              className={`${
                showModal ? "bi-x-lg" : "bi-dpad-fill px-3 rounded py-1"
              }  text-xl`}
            ></p>
          </div>
        </div>
      </div>

      {/* Menu */}
      {showModal && (
        <>
          <div className="overlay-bg"></div>
          <div
            className={`animate__animated ${
              showModal ? "animate__fadeInDown" : "animate__fadeOutUp"
            } bg-zinc-950 h- w-full fixed z-10 top-[8.5%] border-t border-r-0 border-gray-800 text-white p-6`}
          >
            <div className="mt-1 font-semibold relative">
              <Search />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
