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
      <header>
        <Navbar />
      </header>
      <main>
        <MovieSlider />
        <TrendingMovie />
        <PopularMovies />
        <Theater />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Movies;
