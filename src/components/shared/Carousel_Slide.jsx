import React from "react";
import Slider_Details from "./Slider_Details";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
const Carousel_Slide = ({ trending, status, icon, media }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper cursor-grab"
    >
      {trending
        .filter((trend_movie) => trend_movie.backdrop_path !== null)
        .map((trend_movie, index) =>
          trend_movie.backdrop_path ? (
            <SwiperSlide key={index} className="relative">
              <div className="h-[90vh] object-center">
                <img
                  src={`https://image.tmdb.org/t/p/original${trend_movie.backdrop_path}`}
                  className="block opacity-60 w-full h-full object-cover object-center z-[5]"
                  alt=""
                />
                <div className="absolute bottom-0 w-full h-[40vh] bg-gradient-to-t from-[#121212] to-transparent"></div>
              </div>
              <Slider_Details
                trend_movie={trend_movie}
                status={status}
                icon={icon}
                media={media}
              />
            </SwiperSlide>
          ) : (
            ""
          )
        )
        .slice(0, 15)}
    </Swiper>
  );
};

export default Carousel_Slide;
