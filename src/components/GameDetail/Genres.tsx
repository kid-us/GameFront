import { GameGenres } from "../Games/GameDetail";

interface Props {
  genres: GameGenres[];
}

const Genres = ({ genres }: Props) => {
  return (
    <>
      <p className="font-poppins mb-4 text-gray-400">Genre</p>
      <p className="space-x-5 font-bold">
        {genres.map((genre) => (
          <span
            key={genre.id}
            className="bg-teal-600 rounded py-1 px-5 text-sm"
          >
            {genre.name}
          </span>
        ))}
      </p>
    </>
  );
};

export default Genres;
