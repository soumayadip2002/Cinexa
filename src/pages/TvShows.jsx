import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TvSlider from "../components/TV/TvSlider";
import TrendingShows from "../components/TV/TrendingShows";
import PopularTv from "../components/TV/PopularTv";
import Footer from "../components/shared/Footer";
import OnAir from "../components/TV/OnAir";
const TvShows = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <TvSlider />
        <TrendingShows />
        <PopularTv />
        <OnAir />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default TvShows;
