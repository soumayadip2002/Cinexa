import React from "react";
import MovieImage from "/assets/theater.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const NowPlaying = ({ movies, type }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-[70%] m-auto md:w-[80%] sm:w-full relative mb-12">
        {movies && <img src={MovieImage} alt="" />}

        <div className="absolute top-[20%] left-0 right-0 w-[60%] m-auto md:w-[70%] sm:w-[80%]">
          <Swiper
            className="mySwiper relative"
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
          >
            {movies &&
              movies.map((movie) => (
                <SwiperSlide
                  key={movie.id}
                  className="group cursor-pointer"
                  onClick={() => {
                    navigate(`/details/${type}/${movie.id}`);
                  }}
                >
                  <div>
                    {movie.backdrop_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt="poster"
                      />
                    )}
                  </div>

                  <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear bg-[rgba(0,0,0,0.8)] top-0 bottom-0 left-0 right-0">
                    <div className="absolute bottom-2 left-5 right-5  sm:bottom-2 sm:left-1 sm:right-1">
                      <div>
                        <h1 className="text-lg sm:text-md">
                          {type === "movie"
                            ? movie.title
                              ? movie.title.includes(":")
                                ? movie.title.split(":")[0]
                                : movie.title.length > 20
                                ? movie.title.slice(0, 20) + ".."
                                : movie.title
                              : movie.original_name.split(":")[0]
                            : type === "tv"
                            ? movie.name.includes(":")
                              ? movie.name.split(":")[0]
                              : movie.name
                            : ""}
                        </h1>
                        <p className="text-sm text-gray-300">
                          {movie.overview && movie.overview.slice(0, 50) + ".."}
                        </p>
                        <div className="mt-2 flex items-center gap-x-1">
                          <FaThumbsUp className="text-yellow-400 mt-[-.2rem]" />
                          <p>{movie.vote_average}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
