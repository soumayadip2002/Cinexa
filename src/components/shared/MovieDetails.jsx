import React, { useState } from "react";
import { LiaImdb } from "react-icons/lia";
import { AiFillClockCircle } from "react-icons/ai";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
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

  const runtime =
    movie.runtime &&
    parseFloat(movie.runtime / 60)
      .toString()
      .slice(0, 4)
      .replace(".", " hour ");
  const time = runtime + " Minute";
  return (
    <div>
      <h1 className="text-5xl md:text-3xl sm:text-2xl">
        Title:{" "}
        {movie.title
          ? movie.title
          : movie.name
          ? movie.name
          : movie.original_name}
      </h1>
      <p className="text-md text-gray-200 mt-4">
        <span className="text-xl text-sky-400">Overview: </span>{" "}
        {movie.overview}
      </p>
      <div className="flex items-center gap-x-2 sm:grid sm:gap-y-2">
        {movie.runtime && (
          <div className="flex items-center gap-x-2 mt-4 bg-[#463f3a] p-2 w-fit rounded-md shadow-inner">
            <div className="text-3xl text-[#b5838d]">
              <AiFillClockCircle />
            </div>
            <h2 className="text-md lowercase">{time}</h2>
          </div>
        )}
        <div
          className="flex items-center gap-x-2 mt-4 bg-[#ef233c] hover:bg-[#f25c54] 
        transition-all duration-300 ease-in p-2 w-fit rounded-md shadow-inner cursor-pointer"
          onClick={() => setOpenTrailer(true)}
        >
          <div className="text-3xl">
            <MdOutlinePlayCircleFilled />
          </div>
          <h2 className="text-md">Watch Trailer</h2>
        </div>
      </div>
      {type === "tv" && (
        <div className="mt-4">
          <div>
            <h1>
              <span className="text-lg">Season: </span>
              <span className="text-md text-gray-300">{movie.number_of_seasons}</span>
            </h1>
          </div>
          <div className="mt-2">
            <h1>
              <span className="text-lg">Episodes: </span>
              <span className="text-md text-gray-300">{movie.number_of_episodes}</span>
            </h1>
          </div>
        </div>
      )}

      <div className="mt-2 flex items-center gap-x-1">
        <h2 className="text-lg">Genre:</h2>
        <ul className="text-md relative flex gap-x-2">
          {movie.genres &&
            movie.genres.length > 0 &&
            movie.genres.map((genre) => (
              <li key={genre.id} className="text-md text-gray-300">
                {genre.name},
              </li>
            ))}
        </ul>
      </div>
      <div className="mt-2 flex items-center gap-x-1">
        <h2 className="text-lg">
          Language:
        </h2>
        {movie.spoken_languages &&
          movie.spoken_languages.length > 0 &&
          movie.spoken_languages.map((language) => (
            <div key={language.iso_639_1}>
              <p
                className="text-md text-gray-300"
              >
                {language.english_name},
              </p>
            </div>
          ))}
      </div>
      <div className="mt-2 flex items-center">
        {type === "movie" ? (
          <div className="flex items-center gap-x-2">
            <h2 className="text-lg">Release Date: </h2>
            <p className="text-md text-gray-300">{movie.release_date}</p>
          </div>
        ) : (
          <div className="flex items-center gap-x-2">
            <h2 className="text-lg">Timing: </h2>
            <p className="text-md text-gray-300 lowercase">{movie.first_air_date + " to " + movie.last_air_date}</p>
          </div>
        )}
      </div>
      <div className="flex items-center gap-x-2 mt-3">
        <Rating value={movie.vote_average && movie.vote_average*10} /> likes
      </div>

      <div className="flex items-center gap-x-2 mt-4">
        <h2 className="bg-yellow-500 py-1 px-2 rounded-md text-black font-bold">IMDB</h2>
        {movie.vote_average}
      </div>
      <div className="mt-4 flex items-center gap-x-2">
        <h1 className="text-lg">Budget: </h1>
        <h1 className="text-md text-gray-300">
          {movie.budget && movie.budget > 0
            ? numberFormatter(movie.budget)
            : "N/A"}
        </h1>
      </div>
      <div className="mt-2 flex items-center gap-x-2 ">
        <h1 className="text-lg">Collection: </h1>
        <h1 className="text-md text-gray-200">
          {movie.revenue && movie.revenue > 0
            ? numberFormatter(movie.revenue)
            : "N/A"}
        </h1>
      </div>
      
      {movie.networks && (
        <div className="mt-4 ">
          <h1 className="text-xl my-2 border-b-2 border-gray-500">Networks</h1>

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
