import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loadingmovies: { page: 0, results: [], category: "" },
  movieContent:false
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setLoadingMovies: (state, action) => {
      const { page, results, category } = action.payload;
      state.loadingmovies = {
        page,
        results:
          state.loadingmovies.page !== page
            ? [...state.loadingmovies.results, ...results]
            : state.loadingmovies.results,

        category,
      };
    },

    resetMovies: (state) => {
      state.loadingmovies = initialState.loadingmovies
    },

    setMovieContent: (state, action)=>{
      state.movieContent=action.payload;
    }
  },
});

export const { setLoadingMovies, resetMovies, setMovieContent } = moviesSlice.actions;
export default moviesSlice.reducer;
