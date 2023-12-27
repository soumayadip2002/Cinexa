import React, { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import Loading from "../Loading/Loading";
import Carousel_Slide from "../shared/Carousel_Slide";
import { FiTrendingUp } from "react-icons/fi";
import SliderSkeleton from "../Skeleton/SliderSkeleton";
const Slider = () => {
  const api = import.meta.env.VITE_TMDB_API;
  const [trending, setTrending] = useState([]);
  const getTrending = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${api}&language=en-US`
      );
      const data = await response.json();
      setTrending(data.results);
      //console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrending();
  }, []);
  return (
    <div className="">
      {trending.length > 0 ? (
        <Carousel_Slide
          trending={trending}
          status={"Trending Today"}
          media={"movie"}
          icon={<FiTrendingUp />
          
        }
        />
      ) : (
        <SliderSkeleton />
      )}
    </div>
  );
};

export default Slider;
