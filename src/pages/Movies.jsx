import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MovieSlider from "../components/Movie/MovieSlider";
import TrendingMovie from "../components/Movie/TrendingMovie";
import PopularMovies from "../components/Movie/PopularMovies";
import Footer from "../components/shared/Footer";
import Theater from "../components/Movie/Theater";
const Movies = () => {
  return (
    <div>
      <Navbar />
      <MovieSlider />
      <TrendingMovie />
      <PopularMovies />
      <Theater />
      <Footer />
    </div>
  );
};

export default Movies;
