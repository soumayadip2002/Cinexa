import React from "react";
import Loading from "../Loading/Loading";
import CastsCrew from "./CastsCrew";
import MovieDetails from "./MovieDetails";
const Details = ({ movie, loading, type }) => {
  return (
    <>
      {!loading && movie ? (
        <div className="mb-[3rem] absolute top-0 z-[-1]">
          <div className="relative mb-4">
            <div className="h-screen w-full md:h-[50%] ">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="background"
                className="h-full w-full opacity-30 rounded-lg md:rounded-none"
              />
            </div>
            <div className="absolute left-0 bottom-0 h-[80%] w-[30%] md:w-[40%] md:h-[90%]">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
                className="h-full w-full shadow-sm rounded-lg md:rounded-none"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#121212] to-transparent h-[40%]"></div>
          </div>
          <div className="mt-[4rem] md w-[95%] m-auto">
            <div className="grid grid-cols-[2fr,1fr] gap-x-12 md:grid-cols-1">
              <MovieDetails movie={movie} type={type} />
              <CastsCrew id={movie.id} type={type} />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Details;
