import useGenres from "../../hooks/useGenres";
import useGames from "../../hooks/useGames";
import { useSelectedGenreStore } from "../../store/useSelectedGenre";
import { useNavigate, useLocation } from "react-router-dom";
interface Props {
  hideFilter?: (value: boolean) => void;
}

const Genres = ({ hideFilter }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const paramsId = new URLSearchParams(location.search).get("genres");

  const { genres, loading } = useGenres();
  const { handleGenreSelect } = useGames();
  const { id } = useSelectedGenreStore();

  const navigateToThis = (id: number) => {
    navigate(window.location.pathname, { replace: true });

    const url = new URL(window.location.href);
    url.searchParams.set("genres", id.toString());
    navigate(`${url.pathname}${url.search}`, { replace: true });
  };

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
              onClick={() => {
                handleGenreSelect(genre.id);
                if (hideFilter) {
                  hideFilter(false);
                }
                navigateToThis(genre.id);
              }}
              key={genre.id}
              className={`relative grid grid-cols-3 mb-5 cursor-pointer ${
                id === genre.id &&
                "text-teal-600 rounded shadow-sm shadow-teal-700"
              } ${
                paramsId != null
                  ? Number(paramsId) === genre.id &&
                    "text-teal-600 rounded shadow-sm shadow-teal-700"
                  : ""
              } `}
            >
              <img
                src={genre.image_background}
                className="w-10 object-cover h-10 rounded shadow-lg"
              />
              <p className="mt-2 ms-5">{genre.name}</p>
              {/* <p className=" absolute -top-3 right-2 font-mono p-1 text-teal-600 text-xs">
                {genre.games_count}
              </p> */}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Genres;
