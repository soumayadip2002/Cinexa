import React, { useState, useEffect } from "react";
import Heading from "../shared/Heading";
import TopImdb from "../shared/TopImdb";
const PopularTv = () => {
  const [movies, setMovies] = useState([]);
  const api = import.meta.env.VITE_TMDB_API;
  const type = "tv";

  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${api}&language=en-US&page=2`
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
  return (
    <div className="w-[95%] m-auto my-8">
      <Heading heading={"Popular Shows"} />
      <TopImdb movies={movies} type={type} />
    </div>
  );
};

export default PopularTv;
