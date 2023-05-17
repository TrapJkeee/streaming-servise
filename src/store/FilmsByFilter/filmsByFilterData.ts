import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "constants/api";
import { API_KEY2 } from "constants/api";
import { Movies } from "types";

export const fetchMoviesByFilterData = createAsyncThunk<Movies[], string>(
  "filmsByFilter",
  async (genre) => {
    if (genre === "") {
      return [];
    }

    const response = await fetch(
      `https://api.kinopoisk.dev/v1.3/movie?page=1&limit=50&type=movie&genres.name=${genre}&token=${API_KEY2}`
    );

    const data = await response.json();

    return data.docs;
  }
);

// export const fetchTVSeriesByFilterData = createAsyncThunk<Movies[], string>(
//   "filmsByFilter",
//   async (genre) => {
//     if (genre === "") {
//       return [];
//     }

//     const response = await fetch(
//       `https://api.kinopoisk.dev/v1.3/movie?page=1&limit=50&type=tv-series&genres.name=${genre}&token=${API_KEY2}`
//     );

//     const data = await response.json();

//     return data.docs;
//   }
// );
