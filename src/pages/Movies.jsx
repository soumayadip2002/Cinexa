import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MovieSlider from "../components/Movie/MovieSlider";
import TrendingMovie from "../components/Movie/TrendingMovie";
const Movies = () => {
  return (
    <div>
      <Navbar />
      <MovieSlider />
      <TrendingMovie />
    </div>
  );
};

export default Movies;
