import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setLoadingMovies } from "../../state/reducer";
import { useSelector, useDispatch } from "react-redux";
import GenreCountrySkeleton from "../Skeleton/GenreCountrySkeleton";
import GenreLayout from "../GenreLayout/GenreLayout";
import { resetMovies } from "../../state/reducer";
const AllSearchResults = () => {
  const query_param = useParams().query;
  const [query, setQuery] = useState("");
  console.log(query)
  const api = import.meta.env.VITE_TMDB_API;
  const movies = useSelector((state) => state.loadingmovies);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
    
  useEffect(()=>{
    const handleQuery = ()=>{
        query_param && setQuery(query_param)
    }
    handleQuery();
  }, [query_param]);
  const getSearchMovies = async () => {
    try {
      const respose = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${api}&query=${query}&page=${page}`
      );

      const data = await respose.json();
      dispatch(
        setLoadingMovies({
          page: data.page,
          results: data.results,
          category: query,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    movies.category !== query && dispatch(resetMovies());
    if(query){
        getSearchMovies();
    }
  }, [query, page]);

  return movies.results.length > 0 ? (
    <GenreLayout
      name={query}
      movies={movies}
      page={page}
      setPage={setPage}
    />
  ) : (
    <GenreCountrySkeleton />
  );
};

export default AllSearchResults;
