type SortOrders = {
  value: string;
  label: string;
};

export const sortOrders: SortOrders[] = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date Added" },
  { value: "-released", label: "Release Date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Rating" },
];
