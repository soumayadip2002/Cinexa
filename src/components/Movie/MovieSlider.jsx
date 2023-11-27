import React, { useEffect, useState } from "react";
import Carousel_Slide from "../shared/Carousel_Slide";
import Loading from "../Loading/Loading";
import { MdUpcoming } from "react-icons/md";
const MovieSlider = () => {
  const [upcoming, setUpcoming] = useState([]);
  const api = import.meta.env.VITE_TMDB_API;
  const getUpComingMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&region=US&page=1`
      );
      const data = await response.json();
      setUpcoming(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUpComingMovies();
  }, []);
  return (
    <div>
      {upcoming.length > 0 ? (
        <Carousel_Slide
          trending={upcoming}
          status={"Upcoming"}
          icon={<MdUpcoming />}
          media={"movie"}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MovieSlider;
