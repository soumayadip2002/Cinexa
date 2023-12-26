import React from "react";
import Loading from "../Loading/Loading";
import CastsCrew from "./CastsCrew";
import MovieDetails from "./MovieDetails";
const Details = ({ movie, loading, type }) => {
  return (
    <>
      {!loading && movie ? (
        <div className="mb-[3rem] mt-[-5rem] z-[-1] lg:mt-0 md:mt-[-5rem]">
          <div className="h-full w-full lg:h-screen lg:w-screen md:h-[70vh] relative">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt=""
              className="h-full w-full opacity-10"
            />
            <div className="absolute top-1/2 left-2 -translate-y-1/2 md:left-1/2 md:top-[55%] md:-translate-x-1/2  
            w-fit h-fit">
              <div className="w-[90%] m-auto md:w-full sm:w-full grid grid-cols-[.8fr,2fr] md:grid-cols-1 gap-x-8">
                <div className="">
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

          <CastsCrew id={movie.id} type={type} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Details;
