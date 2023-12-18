import React from "react";
import { useNavigate } from "react-router-dom";
const SearchResult = ({ movies, search, setSearch }) => {
  const navigate = useNavigate();
  return (
    <div
      className={` bg-white absolute top-[120%] left-[-50%] shadow-lg right-0 z-[40000] rounded-lg overflow-hidden ${
        search ? "block" : "hidden"
      }`}
    >
      {movies.length>1 ? (
        <ul className="px-2 py-1">
          {movies.map(
            (movie) =>
              movie.poster_path && (
                <li
                  key={movie.id}
                  className="my-1 border-b-2 border-gray-200  p-1 
                    cursor-pointer hover:bg-[#fcfcfcfc] transition-all duration-300"
                  onClick={() => {
                    navigate(`/details/${movie.media_type}/${movie.id}`);
                    setSearch("")
                  }}
                >
                  <div className="flex gap-x-2 items-center">
                    <div className="h-[5rem] w-[4rem] overflow-hidden sm:h-[4rem] sm:w-[3rem]">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt=""
                        className="h-full w-full rounded-lg shadow-md"
                      />
                    </div>
                    <div>
                      <h1 className="text-black">
                        {movie.title
                          ? movie.title.length > 24
                            ? movie.title.slice(0, 24).split(":")[0] + ".."
                            : movie.title
                          : movie.name.length > 24
                          ? movie.name.slice(0, 24) + ".."
                          : movie.name}
                      </h1>
                      <div className="flex gap-x-3 items-center text-gray-700">
                        <p className="text-sm">
                          {movie.release_date &&
                            movie.release_date.split("-")[0]}
                        </p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </li>
              )
          )}

          {movies.length>0 && <div className="flex justify-center items-center w-full mt-2">
            <button
              className=" bg-[#5cb7cf] py-1 w-full px-2 rounded-sm text-white capitalize hover:bg-[#62d1ec] 
                transition-all duration-300"
            >
              view all results
            </button>
          </div>}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchResult;
