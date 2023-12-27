import React, { useEffect, useState } from "react";
import Carousel_Slide from "../shared/Carousel_Slide";
import { GiAirZigzag } from "react-icons/gi";
import SliderSkeleton from "../Skeleton/SliderSkeleton";
const TvSlider = () => {
  const api = import.meta.env.VITE_TMDB_API;
  const [airingToday, setAiringToday] = useState([]);
  const getAirShows = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${api}&language=en-US&page=1`
    );
    const data = await response.json();
    setAiringToday(data.results);
    console.log(data);
  };

  useEffect(() => {
    getAirShows();
  }, []);
  return airingToday.length > 0 ? (
    <div>
      <Carousel_Slide
        trending={airingToday}
        icon={<GiAirZigzag />}
        status={"Airing Today"}
        media={"tv"}
      />
    </div>
  ) : (
    <SliderSkeleton />
  );
};

export default TvSlider;
