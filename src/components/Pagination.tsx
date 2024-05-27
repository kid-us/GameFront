import useGames from "../hooks/useGames";

interface Props {
  next: string | null;
  previous: string | null;
}

const Pagination = ({ next, previous }: Props) => {
  const { handleNextPageGames, handlePreviousPageGames } = useGames();
  console.log(next);

  return (
    <div
      className={`flex ${
        previous !== null ? "justify-between" : "justify-center"
      } my-8`}
    >
      {previous !== null && (
        <div>
          <button
            onClick={() => handlePreviousPageGames(previous)}
            className="bg-zinc-900 rounded-md te py-3 shadow shadow-teal-400 px-10 text-teal-500 font-poppins text-sm"
          >
            Previous
          </button>
        </div>
      )}

      <div>
        <button
          onClick={() => handleNextPageGames(next)}
          className="bg-zinc-900 rounded-md te py-3 shadow shadow-teal-400 px-10 text-teal-500 font-poppins text-sm"
        >
          {previous !== null ? "Next" : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
