import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLanguageOutline } from "react-icons/io5";
import Trailer from "./Trailer";
import Rating from "./Rating";
const MovieDetails = ({ movie, type }) => {
  const [openTrailer, setOpenTrailer] = useState(false);
  const numberFormatter = (number) => {
    const revenueformat = new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "long",
    }).format(number);

    return revenueformat;
  };

  const today = new Date();
  const targetDate = new Date(type === "movie" && `${movie.release_date}`);
  targetDate.setMonth(targetDate.getMonth() + 4);
  return (
    <div>
      <h1 className="text-4xl md:text-3xl sm:text-2xl">
        {movie.title
          ? movie.title
          : movie.name
          ? movie.name
          : movie.original_name}
      </h1>
      <p className="text-md text-gray-300 mt-4 md:mt-2 sm:text-justify">
        {movie.overview}
      </p>

      <div className="flex gap-x-4 mt-4 sm:flex-col md:gap-y-2">
        <div className="flex items-center gap-x-1 sm:mt-2">
          <ul className="text-md relative flex sm:grid sm:grid-cols-3 gap-2">
            {movie.genres &&
              movie.genres.length > 0 &&
              movie.genres.map((genre, index) => (
                <li
                  key={genre.id}
                  className="text-md text-gray-100 bg-pink-600 px-2 py-[.2rem] rounded-sm flex items-center"
                >
                  {genre.name}
                </li>
              ))}
          </ul>
        </div>
        <div className="flex items-center">
          {type === "movie" ? (
            <div className="flex items-center gap-x-[.2rem]">
              <FaCalendarAlt className="text-yellow-300 text-sm mb-[.1rem]" />
              <p className="text-md text-gray-300">{movie.release_date}</p>
            </div>
          ) : (
            <div className="flex items-center gap-x-[.2rem]">
              <FaCalendarAlt className="text-yellow-300 text-sm mb-[.1rem]" />
              <p className="text-md text-gray-300 lowercase">
                {movie.first_air_date + " to " + movie.last_air_date}
              </p>
            </div>
          )}
        </div>

        {movie.runtime && (
          <div className="flex items-center gap-x-[.2rem]">
            <FaRegClock className="text-sm text-yellow-300" />
            <p>
              {movie.runtime} <span className="lowercase">minutes</span>
            </p>
          </div>
        )}
      </div>

      {type === "tv" && (
        <div className="mt-4">
          <div>
            <h1>
              <span className="text-lg">Season: </span>
              <span className="text-md text-gray-300">
                {movie.number_of_seasons}
              </span>
            </h1>
          </div>
          <div className="mt-2">
            <h1>
              <span className="text-lg">Episodes: </span>
              <span className="text-md text-gray-300">
                {movie.number_of_episodes}
              </span>
            </h1>
          </div>
        </div>
      )}

      <div className="my-4 flex items-center gap-x-1">
        {movie.spoken_languages && movie.spoken_languages.length > 0 && (
          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-x-2">
              {movie.spoken_languages.map((language, index) => (
                <div key={language.iso_639_1} className="flex items-center">
                  <p className="text-md bg-[rgba(255,255,255,0.1)] px-2 py-[.2rem] rounded-sm">
                    {language.english_name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="my-4">
        <Rating value={movie.vote_average * 10} />
      </div>
      {movie.budget
        ? movie.budget > 0 && (
            <div className="mt-4 flex items-center gap-x-2">
              <h1 className="text-lg">Budget: </h1>
              <h1 className="text-md text-gray-300">
                ${numberFormatter(movie.budget)}
              </h1>
            </div>
          )
        : ""}
      {movie.revenue
        ? movie.revenue > 0 && (
            <div className="mt-2 flex items-center gap-x-2 ">
              <h1 className="text-lg">Collection: </h1>
              <h1 className="text-md text-gray-200">
                ${numberFormatter(movie.revenue)}
              </h1>
            </div>
          )
        : ""}

      <div className="flex items-center mt-2 gap-x-2 sm:grid sm:gap-y-2">
        <div
          className="flex items-center gap-x-[.2rem] mt-4 border-[.1rem] border-[#5cb7cf] bg-transparent hover:bg-[#5cb7cf]
        transition-all duration-300 ease-in py-2 px-4 w-fit rounded-3xl shadow-inner cursor-pointer"
          onClick={() => setOpenTrailer(true)}
        >
          <div className="text-md">
            <IoMdPlay />
          </div>
          <h2 className="text-md">Watch Trailer</h2>
        </div>
      </div>
      <Trailer
        id={movie.id}
        type={type}
        openTrailer={openTrailer}
        setOpenTrailer={setOpenTrailer}
      />
    </div>
  );
};

export default MovieDetails;
