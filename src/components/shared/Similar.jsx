import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
const Similar = ({ id, type }) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const api = import.meta.env.VITE_TMDB_API;
  const getCasts = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${api}&language=en-US`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    id && type && getCasts();
  }, [id, type]);
  return (
    movies && (
      <div>
        <div className="mt-8 w-[95%] m-auto">
          <h1 className="text-3xl sm:text-xl">{`Similar ${
            type === "movie" ? "movies" : "tvshows"
          }`}</h1>
          <Swiper
            slidesPerView={1}
            breakpoints={{
              360: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 5,
              },
            }}
            className="mySwiper mt-5"
          >
            {movies.length > 0 &&
              movies.map(
                (movie) =>
                  movie.poster_path && (
                    <SwiperSlide
                      className="flex p-[.1rem] mb-4  h-auto relative cursor-pointer"
                      onClick={() => {
                        navigate(`/details/${type}/${movie.id}`);
                        console.log(location.pathname);
                      }}
                      key={movie.id}
                    >
                      <div className="flex w-full h-[14rem] xs:h-[10.5rem] sm:h-[12.5rem]">
                        <img
                          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                          alt=""
                          className="h-full w-full rounded-md"
                        />
                      </div>
                      <div className="absolute circlerating bottom-[-1rem] left-2">
                        <CircularProgressbar
                          value={movie.vote_average}
                          maxValue={10}
                          text={
                            movie.vote_average % 1 === 0
                              ? movie.vote_average.toString()
                              : movie.vote_average.toFixed(1)
                          }
                          styles={buildStyles({
                            pathColor:
                              movie.vote_average < 5
                                ? "#d00000"
                                : movie.vote_average < 7
                                ? "#ffaa00"
                                : "#008000",
                            textColor:
                              movie.vote_average < 5
                                ? "#d00000"
                                : movie.vote_average < 7
                                ? "#ffaa00"
                                : "#008000",
                            textSize: "2rem",
                          })}
                        />
                      </div>
                    </SwiperSlide>
                  )
              )}
          </Swiper>
        </div>
      </div>
    )
  );
};

export default Similar;
