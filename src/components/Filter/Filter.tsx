import { useState } from "react";

const Filter = () => {
  const [filter, setFilter] = useState(false);
  return (
    <div>
      {/* Large device Filter*/}
      <div className="lg:block md:block hidden text- my-6 shadow-xl rounded px-4 py-3">
        <p className="text-sm">
          <span className="bi-filter-left text-xl"></span> Filter by:
          <span className="text-teal-950 text-xl "> Years</span>
        </p>
      </div>

      {/* Small Device  Genres*/}
      <div
        className={`flex relative justify-between mb-8 lg:hidden mt-5
          ${filter && "sticky top-28"}
          `}
      >
        {!filter && (
          <div>
            <h1 className="font-bold  bi-dpad-fill text-2xl"> Games</h1>
            <p className="text-sm font-semibold mt-2">420 Results</p>
          </div>
        )}
        <div>
          {!filter && (
            <p
              onClick={() => setFilter(true)}
              className="bi-filter-right text-3xl mt-2 border rounded px-2 bg-teal-950 text-white"
            ></p>
          )}
        </div>
        {filter && (
          <>
            <div className="overlay-bg"></div>
            <div className="animate__animated animate__fadeIn absolute h-[100vh] bg-white z-10 w-[80%] border-2 -right-7 top-0 rounded p-4">
              <p
                onClick={() => setFilter(false)}
                className="absolute -top-3 rounded-full bg-teal-950 h-6 w-6 -left-4 text-center text-white mt-1 bi-arrow-right"
              ></p>
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
                ullam sapiente! Tempora, quae aspernatur libero porro omnis eius
                quibusdam atque veniam nostrum ea sapiente molestias saepe iusto
                accusantium repellat quas. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ratione totam delectus officiis
                inventore corrupti soluta vero deserunt natus accusantium
                debitis voluptates provident aspernatur optio, architecto
                reiciendis fugit, excepturi hic est.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Filter;
