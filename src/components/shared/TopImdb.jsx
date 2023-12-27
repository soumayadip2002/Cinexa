import React from "react";
import { useNavigate } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa6";
import LoadMore from "../Loading/LoadMore";
const TopImdb = ({ movies, type }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-12">
      <ul className="grid grid-cols-8 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {movies &&
          movies.map((movie) => (
            <div key={movie.id}>
              <li
                key={movie.id}
                className="relative h-[14rem] xs:h-[10.5rem] sm:h-[12rem]"
                onClick={() => {
                  navigate(`/details/${type}/${movie.id}`);
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt="poster"
                  className="rounded-lg shadow-lg cursor-pointer h-full w-full"
                />

                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-gradient-to-t from-black to-transparent p-1 flex items-center gap-x-2 rounded-b-lg">
                    <FaThumbsUp className="text-yellow-400 text-base" />
                    <p>{movie.vote_average}</p>
                  </div>
                </div>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default TopImdb;
