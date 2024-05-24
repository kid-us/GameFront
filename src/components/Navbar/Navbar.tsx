import { useEffect, useState } from "react";

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
    <>
      <div
        className={`${
          show ? "bg-zinc-950" : "nav-bg"
        } fixed z-10 w-full py-4 hover:bg-zinc-950`}
      >
        <div
          className={`flex flex-shrink-0 justify-between md:mx-6 lg:mx-12 mx-3`}
        >
          <div className="flex justify-start gap-28">
            <div>
              <p className="text-white font-poppins bi-controller text-lg">
                {" "}
                <span className="mx-1"></span> GameFront
              </p>
            </div>
            {/* <div className="text-white font-semibold hidden md:block lg:block uppercase">
              <p>Games</p>
            </div>
            <div className="text-white font-semibold hidden md:block lg:block uppercase">
              <p>Explore</p>
            </div> */}
          </div>

          {/* <div className="text-white font-semibold hidden md:block lg:block">
            <p>Search</p>
          </div> */}
          <div className="text-white font-semibold lg:hidden md:hidden">
            <p
              onClick={() => setShowModal(!showModal)}
              className={`${
                showModal
                  ? "bi-x-lg"
                  : "bi-dpad-fill border px-3 rounded py-1 border-zinc-500"
              }  text-2xl`}
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
            } bg-zinc-950 h- w-full fixed z-10 top-[13.5%] border-t border-r-0 border-gray-800 text-white p-6`}
          >
            <div className="mt-4 font-semibold">
              <input
                type="text"
                className="animate__animated animate__lightSpeedInLeft w-full rounded p-3 bg-teal-950 text-white focus:outline-none-0 outline-none font-mono shadow-sm shadow-gray-500"
                placeholder="Search"
              />
              <p className="mt-5 text-lg animate__animated animate__lightSpeedInLeft">
                Games
              </p>
              <p className="mt-5 text-lg animate__animated animate__lightSpeedInLeft">
                Explore
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
