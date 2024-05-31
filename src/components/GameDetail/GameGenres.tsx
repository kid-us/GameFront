import { GameGenres } from "../../services/gameDetail";

interface Props {
  genres: GameGenres[];
}

const Genres = ({ genres }: Props) => {
  return (
    <>
      <p className="font-poppins mb-2 text-gray-400">Genre</p>
      <p className="font-bold mb-4 space-x-2">
        {genres.map((genre) => (
          <span key={genre.id} className="text-teal-400 rounded text-xs">
            {genre.name}
          </span>
        ))}
      </p>
    </>
  );
};

export default Genres;
