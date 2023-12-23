import React, { useState } from "react";
import Slider_Details from "./Slider_Details";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { SlInfo } from "react-icons/sl";
import { BsPlayCircleFill } from "react-icons/bs";
import Trailer from "./Trailer";
import { Link } from "react-router-dom";
const Carousel_Slide = ({ trending, status, icon, media }) => {
  const [openTrailer, setOpenTrailer] = useState(false);
  const [showId, setShowId] = useState("");
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper relative mt-[-5rem]"
    >
      {trending
        .filter((trend_movie) => trend_movie.backdrop_path !== null)
        .map((trend_movie, index) =>
          trend_movie.backdrop_path ? (
            <SwiperSlide key={index} className="">
              <div className="h-screen">
                <img
                  src={`https://image.tmdb.org/t/p/original${trend_movie.backdrop_path}`}
                  className="block  w-full h-full object-cover object-center z-[5] md:hidden"
                  alt=""
                />
                <img
                  src={`https://image.tmdb.org/t/p/original${trend_movie.poster_path}`}
                  className="w-full h-full object-cover object-center z-[5] hidden md:block opacity-40"
                  alt=""
                />
                <div className="absolute bottom-0 w-full h-[40vh] bg-gradient-to-t from-[#121212] to-transparent"></div>
                <div className="absolute top-0 w-full h-[20vh] bg-gradient-to-b from-[#121212] to-transparent"></div>
              </div>
              <Slider_Details
                trend_movie={trend_movie}
                status={status}
                icon={icon}
                media={media}
              />
              <div className="absolute bottom-8 sm:left-2 z-[200] left-10 flex items-center gap-x-2 cursor-pointer">
                <Link
                  to={`/details/${media}/${trend_movie.id}`}
                  className="flex items-center gap-x-2 bg-sky-500 hover:bg-sky-400 transition-all duration-300 ease-in w-fit  p-2 rounded-md shadow-sm"
                >
                  <SlInfo className="text-2xl" />
                  <h2>See details</h2>
                </Link>
                <div
                  className="flex items-center gap-x-2 bg-red-600 hover:bg-red-500 
          transition-all duration-300 ease-in w-fit p-2 rounded-md shadow-sm"
                  onClick={() => {
                    setOpenTrailer(true);
                    setShowId(trend_movie.id);
                  }}
                >
                  <BsPlayCircleFill className="text-2xl " />
                  <h2>Watch Trailer</h2>
                </div>
              </div>
            </SwiperSlide>
          ) : (
            ""
          )
        )
        .slice(0, 15)}
      <Trailer
        openTrailer={openTrailer}
        setOpenTrailer={setOpenTrailer}
        id={showId}
        type={media}
        home={true}
      />
    </Swiper>
  );
};

export default Carousel_Slide;
