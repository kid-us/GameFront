import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <footer className="h-auto footer-bg lg:pt-24 lg:pb-14 pt-10 lg:me-7 lg:p-0 md:p-0 p-5">
        <div className="container mx-auto ">
          <div className="lg:grid grid-cols-3">
            <div>
              <p className="space-x-10 text-white text-xl font-poppins lg:mb-0 mb-10">
                <span className="bi-controller me-4"></span>
                GameFront
              </p>
              <div className="lg:block md:block hidden">
                <p className="mt-10 text-gray-500 text-sm font-semibold">
                  &copy; 2024 All right reserved
                </p>
                <p className="text-white mt-5">
                  By :
                  <Link
                    to={"https://kiduswebsdev.web.app"}
                    className="text-teal-600 text-sm font-semibold"
                  >
                    {" "}
                    Kidus WF
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex justify-between">
                <div className="text-teal-500 text-2xl space-x-10">
                  <Link
                    to={"https://t.me/Kid_uss"}
                    className="bi-telegram"
                  ></Link>
                  <Link
                    to={"https://twitter.com/kidus_29"}
                    className="bi-twitter"
                  ></Link>
                  <Link
                    to={"https://github.com/kid-us/"}
                    className="bi-github"
                  ></Link>
                  {/* <Link className="bi-youtube"></Link> */}
                </div>
                <div className="text-white text-2xl space-x-10">
                  <p
                    onClick={scrollToTop}
                    className="bi-caret-up-square-fill cursor-pointer"
                  ></p>
                </div>
              </div>
              <div className="mt-10">
                <p className="text-gray-500 font-semibold text-sm">
                  GameFront is top of free video games static website, where to
                  watch games trailers and all information online free without
                  registration required. With a big database and great features,
                  we're confident GameFront is the best free video games online
                  website in the space that you can't simply miss!
                </p>
                <p className="mt-5 text-gray-500 font-semibold text-sm">
                  This site does not store any files on our server, we only
                  linked to the media which is hosted on 3rd party services.
                </p>
                <div className="lg:hidden md:hidden">
                  <p className="mt-10 text-gray-500 text-sm font-semibold">
                    &copy; 2024 All right reserved
                  </p>
                  <p className="text-white mt-5">
                    By :
                    <Link
                      to={"https://kiduswebsdev.web.app"}
                      className="text-teal-600 text-sm font-semibold"
                    >
                      {" "}
                      Kidus WF
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
