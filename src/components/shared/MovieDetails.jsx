import React, { useState } from "react";
import { LiaImdb } from "react-icons/lia";
import { FaRegClock } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
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

      <div className="flex gap-x-4 mt-4 sm:flex-col">
        {type === "tv" || (movie.status && movie.status === "Released") ? (
          today > targetDate ? (
            <h1 className="px-2 py-[.2rem] w-fit border-2 border-gray-200 text-white shadow-[rgba(255,_255,_255,_0.7)_0px_3px_8px]">
              HD
            </h1>
          ) : (
            <h1 className="px-2 py-[.2rem] w-fit border-2 border-gray-200 text-white shadow-[rgba(255,_255,_255,_0.7)_0px_3px_8px]">
              CAM
            </h1>
          )
        ) : (
          ""
        )}
        <div className="flex items-center gap-x-1 sm:mt-2">
          <ul className="text-md relative flex gap-x-2">
            {movie.genres &&
              movie.genres.length > 0 &&
              movie.genres.map((genre, index) => (
                <li key={genre.id} className="text-md text-gray-100">
                  {index !== movie.genres.length - 1
                    ? genre.name + ","
                    : genre.name}
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
      <p className="text-md text-gray-200 mt-4 sm:text-justify">
        {movie.overview}
      </p>
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

      <div className="mt-2 flex items-center gap-x-1">
        {movie.spoken_languages && movie.spoken_languages.length > 0 && (
          <div className="flex items-center gap-x-[.2rem]">
            <IoLanguageOutline className="text-[#5cb7cf] text-lg" />
            {movie.spoken_languages.map((language, index) => (
              <div key={language.iso_639_1}>
                <p className="text-md">
                  {index !== movie.spoken_languages.length - 1
                    ? language.english_name + ","
                    : language.english_name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="my-4">
      <Rating value={movie.vote_average * 10} />
      </div>
      <div className="flex items-center gap-x-2 mt-4">
        
        <h2 className="text-yellow-500 rounded-md  font-bold">
          <AiFillLike className="text-xl " />
        </h2>
        {movie.vote_average}
      </div>
      
      {movie.budget
        ? movie.budget > 0 && (
            <div className="mt-4 flex items-center gap-x-2">
              <h1 className="text-lg">Budget: </h1>
              <h1 className="text-md text-gray-300">
                {numberFormatter(movie.budget)}
              </h1>
            </div>
          )
        : ""}
      {movie.revenue
        ? movie.revenue > 0 && (
            <div className="mt-2 flex items-center gap-x-2 ">
              <h1 className="text-lg">Collection: </h1>
              <h1 className="text-md text-gray-200">
                {numberFormatter(movie.revenue)}
              </h1>
            </div>
          )
        : ""}

      <div className="flex items-center mt-4 gap-x-2 sm:grid sm:gap-y-2">
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
      {/* {movie.networks && (
        <div className="mt-4 ">
          <h1 className="text-xl my-2 border-b-2 border-gray-500">Streaming Platform</h1>

          <div
            className={`grid grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-2`}
          >
            {movie.networks.length > 0 &&
              movie.networks.map((ott) => (
                <div className="flex items-center gap-x-2 my-2">
                  <div className="h-[3rem] w-[3rem] rounded-full bg-gray-200 p-1 overflow-hidden ">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${ott.logo_path}`}
                      alt="logo"
                      className="h-full w-full  
                  object-center object-contain"
                    />
                  </div>
                  <h2 className="text-lg">
                    {ott.name > 15 ? ott.name.slice(0, 15) + ".." : ott.name}
                  </h2>
                </div>
              ))}
          </div>
        </div>
      )}
      <div className="mt-4">
        <h1 className="border-b-2 border-gray-500 text-xl">
          Production Companies
        </h1>
        <div className="grid grid-cols-5 gap-3  sm:grid-cols-1 md:grid-cols-3 items-center mt-2">
          {movie.production_companies &&
            movie.production_companies.length > 0 &&
            movie.production_companies.map((company) => (
              <div key={company.id} className="flex items-center gap-x-1">
                <div className="h-[3rem] w-[3rem]  rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                    alt="logo"
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <h1>
                  {company.name.length > 10
                    ? company.name.slice(0, 10) + ".."
                    : company.name}
                </h1>
              </div>
            ))}
        </div>
      </div>

      <div className="mt-4">
        <h1 className="border-b-2 border-gray-500 text-xl">
          Production Coutries
        </h1>
        <div className="flex gap-x-2">
          {movie.production_countries &&
            movie.production_countries.length > 0 &&
            movie.production_countries.map((country) => (
              <div key={country.iso_3166_1} className="">
                <h2>{country.name},</h2>
              </div>
            ))}
        </div>
      </div> */}
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
