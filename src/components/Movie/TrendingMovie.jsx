import React, { useEffect, useState } from "react";
import TopTrend from "../shared/TopTrend";
const TrendingMovie = () => {
  const [movies, setMovies] = useState([]);
  const api = import.meta.env.VITE_TMDB_API;
  const getTrendMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${api}&language=en-US&page=2`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrendMovies();
  }, []);
  return (
    <div className="mt-8 w-[95%] m-auto">
      <TopTrend
        movies={movies}
        type={"movie"}
        heading={"Trending Movies"}
      />
    </div>
  );
};

export default TrendingMovie;
