import useGenres from "../../hooks/useGenres";
import { Link } from "react-router-dom";

const Genres = () => {
  const genres = useGenres();
  return (
    <>
      {genres?.map((genre) => (
        <Link
          to={`/${genre.id}`}
          key={genre.id}
          className="grid grid-cols-3 mb-5"
        >
          <img
            src={genre.image_background}
            className="w-10 object-cover h-10 rounded shadow-lg"
          />
          <p className="mt-2">{genre.name}</p>
        </Link>
      ))}
    </>
  );
};

export default Genres;
