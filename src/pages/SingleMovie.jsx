import React, { useEffect, useState } from "react";
import Details from "../components/shared/Details";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSingleMovies } from "../state/reducer";
const SingleMovie = () => {
  const id = useParams().id;
  const type = useParams().type;
  const api = import.meta.env.VITE_TMDB_API;
  const movies = useSelector((state)=>state.singlemovie);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getMovieDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${api}&language=en-US`
      );
      const data = await response.json();
      //setMovie(data);
      dispatch(setSingleMovies(data));
      console.log(data);
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);
  return (
    <div>
      <Navbar />
      <Details movie={movies} type={type} loading={loading} />
    </div>
  );
};

export default SingleMovie;
