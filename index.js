import { fetchMovies2 } from "./fetch.js";

const input = document.querySelector("input");
const button = document.querySelector("button");
const movies = document.getElementById("movies");

const insertIntoDom = (movie) => {
  const card = `
  <div class="col-4">
    <div class="card">
      <img src="${movie.Poster}">
      <p>${movie.Title}</p>
    </div>
  `
  movies.insertAdjacentHTML("beforeend", card);
}

export const arrayIteration = (movies) => {
  movies.forEach((movie) => {
    insertIntoDom(movie);
  });
}

// button.addEventListener('click', () =>  fetchMovies(input.value) );
button.addEventListener('click', () => fetchMovies2(input.value))
