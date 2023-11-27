import React from "react";
import LoadMore from "../Loading/LoadMore";
import Loading from "../Loading/Loading";
import { FaCalendarAlt } from "react-icons/fa";
import BackButton from "../BackButton/BackButton";
import { useNavigate } from "react-router-dom";
const GenreLayout = ({ name, movies, page, setPage }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[95%] m-auto">
        <BackButton />
        <h1 className="text-3xl my-3 overflow-hidden text-[#957fef] sm:text-center">
          {name}
        </h1>
        {movies.page > 0 ? (
          <div>
            <ul className="grid grid-cols-6 gap-4 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 mt-4">
              {movies.results.map((movie) =>
                movie.backdrop_path ? (
                  <li key={movie.id} className="rounded-md cursor-pointer">
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt={`${movie.title}`}
                      className="hover:opacity-40 transition-all duration-300 ease-in-out"
                      onClick={() => {
                        navigate(`/details/movie/${movie.id}`);
                      }}
                    />
                    <div className="p-2 bg-[#343a40]">
                      <h2 className="font-normal text-md">
                        {movie.title.length > 15
                          ? movie.title.slice(0, 15) + ".."
                          : movie.title}
                      </h2>
                      <p className="text-[.8rem] flex gap-x-1 items-center">
                        <FaCalendarAlt className="text-[#5cb7cf]" />
                        {movie.release_date}
                      </p>
                    </div>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
            {movies.page === page ? (
              <div className="flex justify-center m-2">
                <button
                  onClick={() => setPage(page + 1)}
                  className="bg-[#3c096c] py-2 px-3 rounded-lg hover:bg-[#5a189a] transition-all duration-300 ease-in"
                >
                  Load More
                </button>
              </div>
            ) : (
              <LoadMore />
            )}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default GenreLayout;
