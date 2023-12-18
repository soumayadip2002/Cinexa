import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loadingmovies: { page: 0, results: [], category: "" },
  singlemovie: {}
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

    setSingleMovies: (state, action)=>{
      state.singlemovie=action.payload;
    }
  },
});

export const { setLoadingMovies, resetMovies, setSingleMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
