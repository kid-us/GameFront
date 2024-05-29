const Footer = () => {
  return (
    <>
      <footer className="h-auto footer-bg pt-14 me-7">
        <div className="container mx-auto ">
          <div className="flex justify-between">
            <div className="">
              <p className="space-x-10 text-white text-xl">
                <span className="bi-telegram"></span>
                <span className="bi-twitter"></span>
                <span className="bi-github"></span>
              </p>
            </div>
            <div className="">
              <p className="bi-caret-up-square-fill text-white text-xl"></p>
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <div className="">
              <p className="space-x-10 text-white text-xl font-poppins">
                <span className="bi-controller me-4"></span>
                GameFront
              </p>
            </div>
            <div className="w-[80%]">
              <p className="text-gray-300 text-sm">
                © 2024, Epic Games, Inc. All rights reserved. Epic, Epic Games,
                the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal
                Engine, the Unreal Engine logo, Unreal Tournament, and the
                Unreal Tournament logo are trademarks or registered trademarks
                of Epic Games, Inc. in the United States of America and
                elsewhere. Other brands or product names are the trademarks of
                their respective owners. Our websites may contain links to other
                sites and resources provided by third parties. These links are
                provided for your convenience only. Epic Games has no control
                over the contents of those sites or resources, and accepts no
                responsibility for them or for any loss or damage that may arise
                from your use of them.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
