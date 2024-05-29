const Footer = () => {
  return (
    <>
      <footer className="h-auto footer-bg pt-24 pb-14 me-7">
        <div className="container mx-auto ">
          <div className="grid grid-cols-3">
            <div>
              <p className="space-x-10 text-white text-xl font-poppins">
                <span className="bi-controller me-4"></span>
                GameFront
              </p>
              <p className="mt-10 text-gray-500 text-sm font-semibold">
                &copy; 2024 All right reserved
              </p>
            
            </div>
            <div className="col-span-2">
              <div className="flex justify-between">
                <div className="text-teal-500 text-2xl space-x-10">
                  <span className="bi-telegram"></span>
                  <span className="bi-twitter"></span>
                  <span className="bi-github"></span>
                  <span className="bi-youtube"></span>
                </div>
                <div className="text-teal-500 text-2xl space-x-10">
                  <p className="bi-caret-up-square-fill"></p>
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
