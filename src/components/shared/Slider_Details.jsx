import React from "react";
import { SlCalender } from "react-icons/sl";
import Rating from "./Rating";
const Slider_Details = ({ trend_movie, status, icon, media }) => {
  return (
    <div className="">
      <div className="absolute bottom-24 left-10 sm:left-2 w-[50%] md:w-[90%]">
        <div className="grid">
          <h1 className="text-5xl font-bold md:text-3xl sm:text-2xl md:text-center w-fit">
            {media === "movie"
              ? trend_movie.title
                ? trend_movie.title.includes(":")
                  ? trend_movie.title.split(":")[0]
                  : trend_movie.title.length > 20
                  ? trend_movie.title.slice(0, 20) + ".."
                  : trend_movie.title
                : trend_movie.original_name.split(":")[0]
              : media === "tv"
              ? trend_movie.name.includes(":")
              ? trend_movie.name.split(":")[0]
              : trend_movie.name
              : ""}
          </h1>
          <div className="text-xl">
            <div className="flex items-center mt-2 gap-x-2">
              <h1 className=" text-pink-600">{icon}</h1>
              {status}
            </div>
          </div>
          <p className="mt-4 text-md sm:text-sm text-gray-200 text-left">
            {trend_movie.overview.length > 100
              ? trend_movie.overview.slice(0, 100) + "..."
              : trend_movie.overview}
          </p>
          <div className="mt-3 flex items-center gap-x-1">
            <Rating
              value={trend_movie.vote_average && trend_movie.vote_average * 10}
            />
          </div>
          {media === "tv" ? (
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
        </div>
      </div>
    </div>
  );
};

export default Slider_Details;
