import { photo } from "../../assets";

const Loading = () => {
  return (
    <div className="animate-blink">
      <div
        style={{
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(to bottom, rgba(1, 1, 1, 0.80), rgba(0, 0, 0, 0.99))`,
          backgroundPosition: "center top",
          paddingTop: "40px",
        }}
      >
        <div className="lg:container lg:mx-auto">
          <h1 className="lg:text-xl text-xl mb-6 lg:mx-0 mx-2 bg-zinc-600 w-2/5 h-8 rounded"></h1>

          {/* Info */}
          <div className="lg:flex lg:gap-5 justify-between">
            <div className="lg:w-[80%] lg:mx-0 mx-2">
              <img
                src={photo}
                alt="Game"
                className="lg:aspect-video aspect-square sm:aspect-square shadow shadow-teal-200 h-[90%] w-full object-cover rounded-lg"
              />
            </div>
            <div className="lg:w-[20%] bg-zinc-950 rounded-md px-5 py-5 text-sm mb-14">
              <p className="mb-5 bg-zinc-600 w-full rounded h-6"></p>
              <p className="bg-zinc-600  w-full rounded h-6"></p>
              <p className="my-4 bg-zinc-600  w-full rounded h-6"></p>
              <p className="mb-1 mt-5 bg-zinc-600  w-full rounded h-6"></p>
              <p className="font-mono bg-zinc-600  w-full rounded h-6"></p>
              <p className="mb-1 mt-5 bg-zinc-600  w-full rounded h-6"></p>
              <p className="bg-zinc-600"></p>
              <img src={photo} alt="Preview" className="rounded mt-8" />
              <div className="flex space-x-4 mt-10">
                <p className="bg-zinc-600  w-full rounded h-6"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
