import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export const getPostsPage = async (pageParam = 1, options = {}) => {
  const response = await api.get(
    `/photos?_start=${pageParam}&_limit=5`,
    options
  );
  return response.data;
};
