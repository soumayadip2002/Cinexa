import React from "react";
import LoadMore from "../Loading/LoadMore";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import Rating from "../shared/Rating";
const GenreLayout = ({ name, movies, page, setPage }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[95%] m-auto mt-8">
        <h1
          className="py-2 text-[4vw] sm:text-[8vw] sm:text-center stroketext"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in-shine"
          data-aos-offset="0"
        >
          {name}
        </h1>
        {movies.page && (
          <div>
            <ul
              className="grid grid-cols-6 gap-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 mt-0"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-shine"
              data-aos-offset="0"
            >
              {movies.results &&
                movies.results.map((movie) =>
                  movie.poster_path ? (
                    <li
                      key={movie.id + Date.now()}
                      className="cursor-pointer relative"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt={`${movie.title}`}
                        className="transition-all rounded-lg  duration-300 ease-in-out h-[19rem] xs:h-[15rem] w-full"
                        onClick={() => {
                          navigate(`/details/movie/${movie.id}`);
                        }}
                      />
                      <div
                        className="p-2
                    absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent rounded-b-lg"
                      >
                        <Rating value={movie.vote_average * 10} />
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
        )}
      </div>
    </>
  );
};

export default GenreLayout;
