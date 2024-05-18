import { callofduty, far6, forza6, mafia3 } from "../assets/img";

const Genres = () => {
  return (
    // <div className="">
    <div className="container-fluid shadow-xl bg-teal-950 text-white font-semibold lg:block md:block hidden border-gray-400-700 me-5 py-10">
      <h1 className="font-bold  bi-dpad-fill text-2xl"> Games</h1>
      <p className="text-sm font-semibold mt-2">420 Results</p>
      <hr className="my-5" />
      <div className="sticky top-24">
        <h1>Genres</h1>
        <div className="mt-5">
          <div className="grid grid-cols-3 mb-5 cursor-pointer">
            <img
              src={callofduty}
              className="w-10 object-cover h-10 rounded shadow-lg"
            />
            <p className="uppercase mt-2">Action</p>
          </div>
          <div className="grid grid-cols-3 mb-5 cursor-pointer">
            <img
              src={callofduty}
              className="w-10 object-cover h-10 rounded shadow-lg"
            />
            <p className="uppercase mt-2">Action</p>
          </div>
          <div className="grid grid-cols-3 mb-5 cursor-pointer">
            <img
              src={callofduty}
              className="w-10 object-cover h-10 rounded shadow-lg"
            />
            <p className="uppercase mt-2">Action</p>
          </div>
          <div className="grid grid-cols-3 mb-5 cursor-pointer">
            <img
              src={callofduty}
              className="w-10 object-cover h-10 rounded shadow-lg"
            />
            <p className="uppercase mt-2">Action</p>
          </div>
          <div className="grid grid-cols-3 mb-5 cursor-pointer">
            <img
              src={callofduty}
              className="w-10 object-cover h-10 rounded shadow-lg"
            />
            <p className="uppercase mt-2">Action</p>
          </div>
          <div className="grid grid-cols-3 mb-5 cursor-pointer">
            <img
              src={callofduty}
              className="w-10 object-cover h-10 rounded shadow-lg"
            />
            <p className="uppercase mt-2">Action</p>
          </div>
          <div className="grid grid-cols-3 mb-5 cursor-pointer">
            <img
              src={callofduty}
              className="w-10 object-cover h-10 rounded shadow-lg"
            />
            <p className="uppercase mt-2">Action</p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Genres;
