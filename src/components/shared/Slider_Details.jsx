import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { SlInfo } from "react-icons/sl";
import { BsPlayCircleFill } from "react-icons/bs";
import Trailer from "./Trailer";
import { Link } from "react-router-dom";
import Rating from "./Rating";
const Slider_Details = ({ trend_movie, status, icon, media }) => {
  const [openTrailer, setOpenTrailer] = useState(false);
  const [showId, setShowId] = useState("");
  return (
    <div className="relative">
      <div className="absolute bottom-20 left-10 sm:left-2 w-[50%] md:w-[90%]">
        <div className="grid">
          <h1 className="text-5xl font-bold md:text-3xl sm:text-2xl md:text-center w-fit">
            {media === "movie"
              ? trend_movie.title
                ? trend_movie.title.split(":")[0]
                : trend_movie.original_name.split(":")[0]
              : media==="tv" ? trend_movie.name.split(":")[0] : ""}
          </h1>
          <div className="text-xl">
            <div className="flex items-center mt-2 gap-x-2">
              <h1 className=" text-pink-600">{icon}</h1>
              {status}
            </div>
          </div>
          <p className="mt-4 text-md sm:text-sm text-gray-200 text-left">
            {trend_movie.overview.length > 300
              ? trend_movie.overview.slice(0, 300) + "..."
              : trend_movie.overview}
          </p>
          <div className="mt-3 flex items-center gap-x-1">
            <Rating value={trend_movie.vote_average && trend_movie.vote_average*10}/>
          </div>
          {media==="tv" ? (
            <div className="mt-3 flex items-center gap-x-2 text-lg">
              <SlCalender className="shadow-sm text-fuchsia-600" />
              <h2 className="">{trend_movie.first_air_date}</h2>
            </div>
          ) : (
            ""
          )}
          {trend_movie.release_date ? (
            <div className="mt-3 flex items-center gap-x-2 text-lg">
              <SlCalender className="shadow-sm text-fuchsia-600" />
              <h2 className="">{trend_movie.release_date}</h2>
            </div>
          ) : (
            ""
          )}
          <div className="mt-3 flex items-center gap-x-2 cursor-pointer">
            <Link to={`/details/${media}/${trend_movie.id}`} className="flex items-center gap-x-2 bg-sky-500 hover:bg-sky-400 transition-all duration-300 ease-in w-fit  p-2 rounded-md shadow-sm">
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
        </div>
      </div>
      <Trailer
        openTrailer={openTrailer}
        setOpenTrailer={setOpenTrailer}
        id={showId}
        type={media}
        home={true}
      />
    </div>
  );
};

export default Slider_Details;
