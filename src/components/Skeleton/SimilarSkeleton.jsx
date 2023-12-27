import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeadingSkeleton from "./HeadingSkeleton";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CheckWidth from "./CheckWidth";
const SimilarSkeleton = () => {
    const isMobile = CheckWidth();
  const similar = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div>
      <div className="mt-8 w-[95%] m-auto">
        <HeadingSkeleton />
        <Swiper
          slidesPerView={1}
          breakpoints={{
            360: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 5,
            },
          }}
          className="mySwiper mt-5"
        >
          {similar.map((item) => (
            <SwiperSlide key={item} className="">
                <SkeletonTheme
                  baseColor="#202020"
                  highlightColor="#444"
                  height={isMobile ? "11rem" : "13rem"}
                >
                  <Skeleton className="rounded-md" />
                </SkeletonTheme>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimilarSkeleton;
