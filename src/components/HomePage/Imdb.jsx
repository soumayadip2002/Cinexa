import React, { useEffect, useState } from "react";
import TopImdb from "../shared/TopImdb";
import TopRatedSkeleton from "../Skeleton/TopRatedSkeleton";
const Imdb = () => {
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("movie");
  const api = import.meta.env.VITE_TMDB_API;

  const getTopImdbMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/${type}?api_key=${api}&language=en-US&vote_average.gte=7`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {}
  };

  useEffect(() => {
    getTopImdbMovies();
  }, [type]);
  return movies.length > 0 ? (
    <div className="w-[95%] m-auto mb-8">
      <div className="mt-12">
        <div className="py-1 font-bold text-3xl sm:text-xl flex items-center sm:justify-center">
          <h1>
            Top{" "}
            <span className="bg-yellow-500 text-black py-1 px-2 rounded-md">
              Imdb
            </span>
          </h1>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex border-2 items-center border-[#5cb7cf] relative rounded-[10rem] transition-all duration-300 ease-linear">
            <div
              className={`${
                type === "movie" ? "bg-[#5cb7cf]" : ""
              } py-2 px-4 text-lg cursor-pointer transition-all duration-300 ease-linear rounded-[10rem] flex items-center`}
              onClick={() => setType("movie")}
            >
              movies
            </div>
            <div
              className={`${
                type === "tv" ? "bg-[#5cb7cf]" : ""
              } py-2 px-4 text-lg cursor-pointer transition-all duration-300 ease-linear rounded-[10rem] flex items-center`}
              onClick={() => setType("tv")}
            >
              tv shows
            </div>
          </div>
        </div>
      </div>
      <TopImdb movies={movies} type={type} />
    </div>
  ) : (
    <TopRatedSkeleton isTopRated={true} />
  );
};

export default Imdb;
