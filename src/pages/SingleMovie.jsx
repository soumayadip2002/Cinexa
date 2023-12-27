import React, { useEffect, useState } from "react";
import Details from "../components/shared/Details";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSingleMovies } from "../state/reducer";
import Footer from "../components/shared/Footer";
import { setMovieContent } from "../state/reducer";
const SingleMovie = () => {
  const id_param = useParams().id;
  const type_param = useParams().type;
  const api = import.meta.env.VITE_TMDB_API;
  const movies = useSelector((state) => state.singlemovie);
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleParams = () => {
      id_param && setId(id_param);
      type_param && setType(type_param);
    };
    handleParams();
  }, [id_param, type_param]);
  const getMovieDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${api}&language=en-US`
      );
      const data = await response.json();
      dispatch(setMovieContent(true));
      dispatch(setSingleMovies(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id && type) {
      getMovieDetails();
    }
  }, [id, type]);
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Details movie={movies} type={type} loading={loading} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SingleMovie;
