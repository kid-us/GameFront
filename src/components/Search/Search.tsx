import { useRef } from "react";
import useGames from "../../hooks/useGames";
import { useGameStore } from "../../store/useGamesStore";

const Search = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { handleSearch } = useGames();
  const { updateGame } = useGameStore();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          updateGame([]);
          handleSearch(ref.current.value);
        }
      }}
    >
      <input
        ref={ref}
        type="text"
        className="w-full ps-10 py-2 rounded-xl bg-zinc-800 text-white focus:outline-none-0 outline-none font-mono shadow-sm shadow-gray-500 placeholder:text-sm"
        placeholder="Search Games"
      />
      <span className="absolute bi-search left-3 top-2 text-zinc-400"></span>
    </form>
  );
};

export default Search;
