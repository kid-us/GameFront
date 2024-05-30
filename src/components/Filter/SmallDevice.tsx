import Genres from "../Genres/Genres";

interface Props {
  filter: boolean;
  count: number | null;
  setFilter: (value: boolean) => void;
}

const SmallDevice = ({ filter, count, setFilter }: Props) => {
  return (
    <>
      <div
        className={`flex relative justify-between mb-8 lg:hidden mt-5
          ${filter && "sticky top-24 z-50"}
          `}
      >
        {!filter && (
          <div>
            <h1 className="font-bold  bi-dpad-fill text-2xl"> Games</h1>
            <p className="text-sm font-semibold mt-2">
              <span className="font-mono me-2 text-teal-500 text-lg">
                {count}
              </span>
              Results
            </p>
          </div>
        )}
        <div>
          {!filter && (
            <p
              onClick={() => setFilter(true)}
              className="bi-filter-right text-3xl mt-2 rounded px-2 bg-teal-800 text-white"
            ></p>
          )}
        </div>
        {filter && (
          <>
            <div className="overlay-bg"></div>
            <div className="animate__animated animate__fadeIn absolute h-[85vh] games-bg z-10 w-[70%] -right-2 top-0 rounded pt-5">
              <p
                onClick={() => setFilter(false)}
                className="absolute -top-1 rounded-full bg-white h-6 w-6 -left-1 text-center text-black font-bold mt-1 bi-arrow-right"
              ></p>

              <div className="px-6">
                <p className="shadow shadow-zinc-800 py-3 text-center rounded-md cursor-pointer mb-7 text-sm">
                  <span className="text-lg bi-filter-left"></span>
                  &nbsp; Filter By Genres
                </p>
                <div className="overflow-scroll h-[70vh]">
                  <Genres hideFilter={(value) => setFilter(value)} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SmallDevice;
