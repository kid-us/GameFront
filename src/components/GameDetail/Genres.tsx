import { GameGenres } from "../Games/GameDetail";

interface Props {
  genres: GameGenres[];
}

const Genres = ({ genres }: Props) => {
  return (
    <>
      <p className="font-poppins mb-2 text-gray-400">Genre</p>
      <p className="space-x-2 font-bold mb-4">
        {genres.map((genre) => (
          <span
            key={genre.id}
            className="bg-teal-900 text-gray-400 rounded py-1 px-5 text-sm"
          >
            {genre.name}
          </span>
        ))}
      </p>
    </>
  );
};

export default Genres;
