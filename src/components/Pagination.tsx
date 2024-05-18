const Pagination = () => {
  return (
    <div className="flex justify-end mt-7 space-x-5">
      <button className="py-1 px-5 border-2 shadow-xl rounded-lg bg-cyan-300">
        Previous
      </button>
      <button className="py-1 px-5 border-2 shadow-xl rounded-lg bg-cyan-400">
        Next
      </button>
    </div>
  );
};

export default Pagination;
