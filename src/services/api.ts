import axios from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  params: {
    key: "675af585f19843d596b1f429b55d94e7",
  }
});

