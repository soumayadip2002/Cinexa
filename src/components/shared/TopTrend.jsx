import React from "react";
import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { SwiperButton } from "../shared/SwiperButton";
import { useNavigate } from "react-router-dom";
const TopTrend = ({ heading, movies, type }) => {
  const navigate = useNavigate();
  return movies && movies.length > 0 ? (
    <div>
      <Heading heading={heading} />

      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 2,
          },
        }}
        modules={[Navigation]}
        className="mySwiper z-0"
      >
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="relative"
            onClick={() =>
              navigate(
                `/details/${movie.media_type ? movie.media_type : type}/${
                  movie.id
                }`
              )
            }
          >
            <div
              className="py-2 px-2 mt-[4rem] h-[20rem] sm:h-[19rem] xs:h-[15rem] sm:mt-[2rem]
              cursor-pointer group overflow-hidden 
              "
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
                className="h-full w-full shadow-2xl rounded-lg"
              />
              <div
                className="absolute bottom-[-110%] group-hover:bottom-2
                transition-all duration-300 ease-out  left-2 right-2 
                m-auto bg-gradient-to-t from-black via-black to-transparent h-[50%] p-2 
                "
              >
                <div className=" absolute bottom-2">
                  <h3 className="text-[#e63946] font-bold text-xl">
                    {movie.title
                      ? movie.title.length > 15
                        ? movie.title.slice(0, 15) + "..."
                        : movie.title
                      : movie.name
                      ? movie.name.length > 15
                        ? movie.name.slice(0, 15) + "..."
                        : movie.name
                      : movie.original_name.length > 15
                      ? movie.original_name.slice(0, 15) + "..."
                      : movie.original_name}
                  </h3>
                  <p className="">{movie.overview.slice(0, 50) + ".."}</p>
                  <div className="flex gap-x-2 items-center text-lg">
                    <h2 className="bg-[#ffb703] text-black px-2 py-1 rounded-md font-bold">
                      IMDB
                    </h2>
                    <h2 className="">{movie.vote_average}</h2>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperButton />
      </Swiper>
    </div>
  ) : (
    ""
  );
};
export default TopTrend;
