import React, { useState, useEffect } from "react";
import NowPlaying from "../shared/NowPlaying";
import NowPlayingSkeleton from "../Skeleton/NowPlayingSkeleton";
const OnAir = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const api = import.meta.env.VITE_TMDB_API;
  const type = "tv";

  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${api}&language=en-US&page=2`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
  return movies.length > 0 ? (
    <div>
      <div className="mt-12 flex justify-center">
        <h1 className="text-3xl sm:text-xl">On The Air</h1>
      </div>
      <NowPlaying movies={movies} type={type} />
    </div>
  ) : (
    <NowPlayingSkeleton />
  );
};

export default OnAir;
