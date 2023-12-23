import React from "react";
import Loading from "../Loading/Loading";
import CastsCrew from "./CastsCrew";
import MovieDetails from "./MovieDetails";
const Details = ({ movie, loading, type }) => {
  return (
    <>
      {!loading && movie ? (
        <div className="mb-[3rem] mt-[-5rem] z-[-1]">
          <div className="h-full w-full md:h-[70vh] relative">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt=""
              className="h-full w-full opacity-10"
            />
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 md:left-1/2 md:-translate-x-1/2">
              <div className="w-[90%] m-auto md:w-full grid grid-cols-[22rem,auto] md:grid-cols-1 gap-2">
                <div className="h-[30rem] w-[20rem] sm:h-[15rem] sm:w-[10rem]">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt=""
                    className="h-full w-full rounded-md shadow-lg"
                  />
                </div>
                <div className="md:hidden">
                  <MovieDetails movie={movie} type={type} />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-[93%] m-auto mt-12">
            <MovieDetails movie={movie} type={type} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Details;
