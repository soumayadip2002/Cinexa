import React, { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import SearchResult from "./SearchResult";
const DekstopSearch = ({ open, setOpen }) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const api = import.meta.env.VITE_TMDB_API;
  const getSearchResult = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${api}&query=${search}`
      );

      const data = await response.json();
      setMovies(data.results.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchResult();
  }, []);
  return (
    <div
      className="p-1 bg-white  text-black rounded-lg 
  border-2 border-[#5cb7cf] flex items-center gap-x-1 relative md:p-0 sm:w-[50%] md:bg-transparent md:border-none"
    >
      <input
        type="text"
        className="bg-transparent border-none outline-none  px-2 w-full 
        md:bg-white md:py-1 md:rounded-md"
        placeholder="search here..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          getSearchResult();
        }}
      />
      <div className="text-xl text-[#5cb7cf] md:hidden">
        <GrSearch />
      </div>
      <div
        className="text-xl bg-[#5cb7cf] hidden md:block ml-1 p-2 text-white font-bold rounded-full cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <RxCross2 /> : <RiMenu3Line />}
      </div>

      <SearchResult movies={movies} search={search} setSearch={setSearch} />
    </div>
  );
};

export default DekstopSearch;
