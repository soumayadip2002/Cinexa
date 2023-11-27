import React, { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import VideoPlayer from "./VideoPlayer";
const Trailer = React.memo(({ openTrailer, setOpenTrailer, id, type, home }) => {
  const api = import.meta.env.VITE_TMDB_API;
  const [trailer, setTrailer] = useState([]);
  const [loading, setLoading] = useState(false);
  //console.log(trailer);
  const key_value =
    trailer && trailer.length > 0
      ? trailer.find(
          (video) =>
            video.name.toLowerCase().includes("official trailer") ||
            video.name.toLowerCase().includes("trailer") || video.name.toLowerCase().includes("official promo")
        )
      : "";
  // console.log(key_value)
  const key_code = key_value.key ? key_value.key : "";
  const getTrailer = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${api}&language=en-US`
      );
      const data = await response.json();
      console.log(data)
      setTrailer(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (id) {
      getTrailer();
    }
  }, [id]);
  return (
    <div
      className={`${
        openTrailer ? "block" : "hidden"
      } ${home ? 'absolute' : 'fixed'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      h-screen w-screen flex justify-center items-center
       bg-[rgba(0,0,0,0.7)]`}
    >
      <div className="relative flex justify-center items-center py-3 sm:py-0">
        <div
          onClick={() => setOpenTrailer(false)}
          className="absolute top-[-1rem] right-0 
          sm:flex sm:top-[-2rem] sm:justify-center sm:left-0 sm:right-0 text-3xl  cursor-pointer"
        >
          <RxCrossCircled />
        </div>
        <VideoPlayer loading={loading} key_code={key_code} openTrailer={openTrailer} />
      </div>
    </div>
  );
});

export default Trailer;
