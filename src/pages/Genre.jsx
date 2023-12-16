import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GenreLayout from "../components/GenreLayout/GenreLayout";
const Genre = () => {
  const gener_id = useParams().id;
  const gener_name = useParams().genre;
  const [page, setPage] = useState(1);

  const [movies, setMovies] = useState({ page: 0, results: [] });
  const api = import.meta.env.VITE_TMDB_API

  useEffect(() => {
    const getGenreMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&page=${page}&with_genres=${gener_id}`
        );
        const data = await response.json();
        console.log(data);
        setMovies((previous) => ({
          page: data.page,
          results:
            data.page !== previous.page
              ? [...previous.results, ...data.results]
              : previous.results,
        }));
      } catch (error) {
        console.log(error)
      }
    };
    getGenreMovies();
  }, [gener_id, page]);

  return (
    <>
      <GenreLayout name={gener_name} movies={movies} page={page} setPage={setPage} />
    </>
    
  );
};

export default Genre;
