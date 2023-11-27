import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import country_details from "../components/Navbar/country_item";
import GenreLayout from "../components/GenreLayout/GenreLayout";
const Country = () => {
  const country = useParams().name;
  const country_info = country_details.find(
    (detail) => detail.iso_3166_1 === country
  );
  const country_name = country_info.name;
  const [movies, setMovies] = useState({ page: 0, results: [] });
  const [page, setPage] = useState(1);
  const api = import.meta.env.VITE_TMDB_API
  
  const getCountryMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api}&
          language=en-US&page=${page}&with_origin_country=${country}`
      );
      const data = await response.json();
      setMovies((previous) => ({
        page: data.page,
        results:
          data.page !== previous.page
            ? [...previous.results, ...data.results]
            : previous.results,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountryMovies();
  }, [country, page]);

  return (
    <GenreLayout
      name={country_name}
      movies={movies}
      page={page}
      setPage={setPage}
    />
  );
};

export default Country;
