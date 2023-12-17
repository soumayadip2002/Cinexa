import React, { useEffect, useState } from "react";
import TopTrend from "../shared/TopTrend";
const TrendWeek = () => {
  const [movies, setMovies] = useState([]);
  const api = import.meta.env.VITE_TMDB_API;
  const getMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${api}&language=en-US`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="mt-8 w-[95%] m-auto">
      <TopTrend movies={movies} type={""} heading={"Trending This week"} />
    </div>
  );
};

export default TrendWeek;
