import { arrayIteration } from "./index.js";

export const fetchMovies2 = async (input) => {
  const res = await fetch(`https://omdbapi.com/?apikey=f6da2807&s=${input}`)
  const {Search} = await res.json()
  arrayIteration(Search);
};
