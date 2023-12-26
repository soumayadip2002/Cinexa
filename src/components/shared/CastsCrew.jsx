import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
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
      console.log(casts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    id && type && getCasts();
  }, [id, type]);
  return (
    <div>
      <div className="mt-8 w-[95%] m-auto">
        <h1 className="text-3xl sm:text-xl">Top Casts</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            360: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 7.5,
              spaceBetween: 10,
            },
          }}
          className="mySwiper mt-8"
        >
          {casts.length > 0 &&
            casts.map((cast) => (
              <SwiperSlide
                className="sm:flex-col p-2 sm:p-1 rounded-md flex items-center flex-col"
                key={cast.id}
              >
                <div className="h-[6rem] w-[6rem] rounded-full overflow-hidden">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                    alt=""
                    className="h-full w-full "
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="text-md">{cast.original_name}</p>
                  <h3 className="text-sm text-gray-400">{cast.character}</h3>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CastsCrew;
