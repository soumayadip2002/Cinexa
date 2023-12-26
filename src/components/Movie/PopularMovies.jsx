import React, { useEffect, useState } from 'react'
import Heading from '../shared/Heading';
import TopImdb from '../shared/TopImdb';
const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const api = import.meta.env.VITE_TMDB_API;
  const type="movie";

  const getPopularMovies = async()=>{
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=2`
      )
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getPopularMovies();
  },[])
  return (
    <div className='w-[95%] m-auto mt-8 mb-8'>
      <Heading heading={"Popular Movies"} />
      <TopImdb movies={movies} type={type} />
    </div>
  )
}

export default PopularMovies
