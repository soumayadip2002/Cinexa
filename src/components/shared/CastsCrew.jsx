import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const CastsCrew = ({ id, type }) => {
  const [casts, setCasts] = useState([]);
  const api = import.meta.env.VITE_TMDB_API;
  const getCasts = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${api}&language=en-US`
      );
      const data = await response.json();
      setCasts(data.cast);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCasts();
  }, []);
  return (
    <div>
      <div className="p-4 bg-black md:mt-4">
        <h1 className="text-2xl">Casts:</h1>
        <hr />
        <div className="grid gap-4 mt-4 sm:hidden md:grid-cols-2 md:gap-2">
          {casts.length>0 && casts
            .map((cast) => (
              <div
                className="flex gap-2 items-center sm:flex-col bg-[#121212] p-2 sm:p-1 rounded-md"
                key={cast.id}
              >
                <div className="h-[6rem] w-[6rem] rounded-full overflow-hidden">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                    alt=""
                    className="h-full w-full "
                  />
                </div>
                <div className="md:mt-2">
                  <h3 className="text-lg">{cast.character}</h3>
                  <p className="text-md text-gray-300">{cast.original_name}</p>
                </div>
              </div>
            ))
            .slice(0, 6)}
        </div>

        <Carousel
          showThumbs={false}
          autoPlay={false}
          transitionTime={2}
          infiniteLoop={true}
          showStatus={false}
          className="hidden sm:block gap-4 mt-4"
        >
          { casts
            .map((cast) => (
              <div className="bg-[#121212] p-2 rounded-md" key={cast.id}>
                <div className="flex justify-center">
                  <div className="h-[6rem] w-[6rem] overflow-hidden rounded-full">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                      alt=""
                      className="h-full w-full "
                    />
                  </div>
                </div>
                <div className="mt-2 pb-8 grid">
                  <h3 className="text-lg">{cast.character}</h3>
                  <p className="text-md text-gray-200">{cast.original_name}</p>
                </div>
              </div>
            ))
            .slice(0, 10)}
        </Carousel>
      </div>
    </div>
  );
};

export default CastsCrew;
