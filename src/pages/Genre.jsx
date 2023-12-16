import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GenreLayout from "../components/GenreLayout/GenreLayout";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { setLoadingMovies, resetMovies } from "../state/reducer";
const Genre = () => {
  const gener_id = useParams().id;
  const gener_name = useParams().genre;
  const [page, setPage] = useState(1);
  const movies = useSelector((state) => state.loadingmovies);
  const api = import.meta.env.VITE_TMDB_API
  const dispatch = useDispatch();
  useEffect(() => {
    const getGenreMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&page=${page}&with_genres=${gener_id}`
        );
        const data = await response.json();
        dispatch(
          setLoadingMovies({
            page: data.page,
            results: data.results,
            category: gener_id,
          })
        );
      } catch (error) {
        console.log(error)
      }
    };
    movies.category !== gener_id && dispatch(resetMovies());
    getGenreMovies();
  }, [gener_id, page]);

  return (
    <>
      <GenreLayout name={gener_name} movies={movies} page={page} setPage={setPage} />
    </>
    
  );
};

export default Genre;
