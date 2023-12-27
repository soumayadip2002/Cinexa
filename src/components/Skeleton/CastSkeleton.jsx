import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CheckWidth from "./CheckWidth";
import HeadingSkeleton from "./HeadingSkeleton";
const CastSkeleton = () => {
  const isMobile = CheckWidth();
  const casts = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className="mt-8 w-[95%] m-auto">
      <HeadingSkeleton />

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
        className="mySwiper mt-5"
      >
        {casts.map((cast) => (
          <SwiperSlide key={cast} className="">
            <div>
              <div className="flex justify-center">
                <SkeletonTheme
                  baseColor="#202020"
                  highlightColor="#444"
                  height="6rem"
                  width="6rem"
                >
                  <Skeleton className="rounded-full" />
                </SkeletonTheme>
              </div>
              <div className="mt-2">
                <SkeletonTheme
                  baseColor="#202020"
                  highlightColor="#444"
                  height={30}
                >
                  <Skeleton />
                </SkeletonTheme>

                <SkeletonTheme
                  baseColor="#202020"
                  highlightColor="#444"
                  height={20}
                >
                  <Skeleton className="mt-2" />
                </SkeletonTheme>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CastSkeleton;
