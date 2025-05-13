import { arrayIteration } from "./index.js";

export const fetchMovies2 = async (input) => {
  const res = await fetch(`https://omdbapi.com/?apikey=${yourAPIKEY}=${input}`)
  const {Search} = await res.json()
  arrayIteration(Search);
};
