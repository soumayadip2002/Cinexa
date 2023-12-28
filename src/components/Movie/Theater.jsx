import React, { useEffect, useState } from "react";
import NowPlaying from "../shared/NowPlaying";
import NowPlayingSkeleton from "../Skeleton/NowPlayingSkeleton";
const Theater = () => {
  const [movies, setMovies] = useState([]);
  const api = import.meta.env.VITE_TMDB_API;
  const type = "movie";

  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${api}&language=en-US`
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
      <div className="mt-12 flex justify-center" data-aos="zoom-in" data-aos-duration="600">
        <h1 className="text-3xl sm:text-xl">Now Playing</h1>
      </div>
      <NowPlaying movies={movies} type={type} />
    </div>
  ) : (
    <NowPlayingSkeleton />
  );
};

export default Theater;
