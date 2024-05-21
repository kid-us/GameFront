import { useState } from "react";
import { sortOrders } from "../../services/sort";
import useGames from "../../hooks/useGames";

const OrderBy = () => {
  const [showSortBy, setShowSorBy] = useState(false);
  const [activeSort, setActiveSort] = useState("");
  const { handleOrder } = useGames();
  return (
    <div className="relative ms-5">
      <button
        onClick={() => setShowSorBy(!showSortBy)}
        className="shadow-xl bg2 w-64 py-2 px-5 rounded-md cursor-pointer text-start"
      >
        <span className="text-xl bi-sort-alpha-up"></span>
        <span className="ms-2 text-md"> Order By</span>
        <span className="text-teal-500">
          {activeSort && " : " + activeSort}
        </span>
        <span
          className={`${
            showSortBy ? "bi-caret-up-fill" : "bi-caret-down-fill"
          } text-xs text-teal-500 ms-5`}
        ></span>
      </button>
      {showSortBy && (
        <div className="absolute bg2 rounded-md shadow-md mt-2 p-2 z-10 w-64 shadow-teal-400">
          {sortOrders.map((sort) => (
            <button
              onClick={() => {
                setActiveSort(sort.label);
                setShowSorBy(false);
                handleOrder(sort.value);
              }}
              key={sort.label}
              className="flex items-center p-2 hover:bg-zinc-800 rounded-md mb-1 w-full"
            >
              <span className="mr-3"></span>
              {sort.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderBy;
