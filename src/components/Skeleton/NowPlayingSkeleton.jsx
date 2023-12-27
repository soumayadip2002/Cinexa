import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MovieImage from "/assets/theater.png";
import CheckWidth from "./CheckWidth";
const NowPlayingSkeleton = () => {
    const isMobile = CheckWidth();
  return (
    <div className="">
      <div className="mt-12 flex justify-center py-1">
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton height={40} width={250} />
        </SkeletonTheme>
      </div>
      <div className="mb-12 w-[70%] m-auto md:w-[80%] sm:w-full relative">
        <img src={MovieImage} alt="" />

        <div className="absolute top-[20%] left-0 right-0 w-[60%] m-auto md:w-[70%] sm:w-[80%]">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={isMobile ? 150 :310} className="rounded-none"  />
          </SkeletonTheme>
        </div>
      </div>
    </div>
  );
};

export default NowPlayingSkeleton;
