import React, { useState, useEffect } from "react";
import TopTrend from "../shared/TopTrend";
const TrendingShows = () => {
  const [shows, setShows] = useState([]);
  const api = import.meta.env.VITE_TMDB_API;
  const getTrendShows = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/tv/week?api_key=${api}&language=en-US&page=2`
      );
      const data = await response.json();
      setShows(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTrendShows();
  }, []);

  return (
    <div className="mt-8 w-[95%] m-auto">
      <TopTrend
        movies={shows}
        type={"tv"}
        heading={"Trending Shows"}
      />
    </div>
  );
};

export default TrendingShows;
