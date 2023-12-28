import React, { useEffect, useState } from "react";
import Details from "../components/shared/Details";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Footer from "../components/shared/Footer";
import { setMovieContent } from "../state/reducer";
import SingleMovieSkeleton from "../components/Skeleton/SingleMovieSkeleton";
const SingleMovie = () => {
  const id_param = useParams().id;
  const type_param = useParams().type;
  const api = import.meta.env.VITE_TMDB_API;
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [imageLoading, setImageLoading] = useState(false);
  console.log(imageLoading)

  useEffect(() => {
    const handleParams = () => {
      id_param && setId(id_param);
      type_param && setType(type_param);
    };
    handleParams();
  }, [id_param, type_param]);

  useEffect(() => {
    if (movies) {
      const image = new Image();
      image.src = `https://image.tmdb.org/t/p/original/${movies.backdrop_path}`;
      image.onload = () => {
        setImageLoading(true);
      };
    }
  }, [movies.backdrop_path]);
  const getMovieDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${api}&language=en-US`
      );
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      dispatch(setMovieContent(true));
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
        {imageLoading && !loading && movies ? (
          <Details movie={movies} type={type} />
        ) : (
          <SingleMovieSkeleton />
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SingleMovie;
