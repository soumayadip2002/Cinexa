import React, { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
const DekstopSearch = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const api = import.meta.env.VITE_TMDB_API;
  const getSearchResult = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${search}`
      );

      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect(()=>{
  //     getSearchResult();
  //   },[])
  return (
    <div
      className="p-1 bg-white  text-black md:hidden rounded-lg 
  border-2 border-[#5cb7cf] flex items-center gap-x-1 relative"
    >
      <input
        type="text"
        className="bg-transparent md:hidden border-none outline-none px-2"
        placeholder="search here..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          getSearchResult();
        }}
      />
      <div className="text-xl text-[#5cb7cf]">
        <GrSearch />
      </div>
      <div
        className={` bg-white absolute top-[110%] left-0 right-0 z-[40000] rounded-lg overflow-hidden ${
          search ? "block" : "hidden"
        }`}
      >
        {movies ? (
          <ul className="px-2 py-1">
            {movies
              .map((movie) => (
                movie.poster_path&&
                <li key={movie.id} className="my-1 border-y-2 border-gray-400 p-1">
                  <div className="flex gap-x-2 items-center">
                    <div className="h-[5rem] w-[5rem] overflow-hidden">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt=""
                        className="h-full w-full"
                      />
                    </div>
                    <h1 className="text-black">{movie.title.slice(0,5)+".."}</h1>
                  </div>
                </li>
              ))
              .slice(0, 5)}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DekstopSearch;
