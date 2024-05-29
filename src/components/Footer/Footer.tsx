const Footer = () => {
  return (
    <>
      <footer className="h-auto footer-bg pt-14 me-7">
        <div className="container mx-auto ">
          <div className="grid grid-cols-3">
            <div>
              <p className="space-x-10 text-white text-xl font-poppins">
                <span className="bi-controller me-4"></span>
                GameFront
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
                <p>
                  GameFront is top of free Movie and Tv Shows static website,
                  where to watch movies trailers and all information online free
                  without registration required. With a big database and great
                  features, we're confident Vidly is the best free movies online
                  website in the space that you can't simply miss!
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
