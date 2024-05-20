import useGenres from "../../hooks/useGenres";
import useGames from "../../hooks/useGames";

const Genres = () => {
  const { genres, loading } = useGenres();
  const { handleGenreSelect } = useGames();

  return (
    <>
      {loading ? (
        [...Array(20)].map((_, index) => (
          <div key={index} className="animate-blink shadow-xl mb-4">
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-zinc-700 w-full h-9 rounded"></div>
              <div className="col-span-3 bg-zinc-700 w-full h-9 rounded"></div>
            </div>
          </div>
        ))
      ) : (
        <>
          {genres?.map((genre) => (
            <div
              onClick={() => handleGenreSelect(genre.id)}
              key={genre.id}
              className="relative grid grid-cols-3 mb-5 cursor-pointer"
            >
              <img
                src={genre.image_background}
                className="w-10 object-cover h-10 rounded shadow-lg"
              />
              <p className="mt-2">{genre.name}</p>
              <p className=" absolute -top-3 right-2 font-mono p-1 text-teal-600 text-xs">
                {genre.games_count}
              </p>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Genres;
