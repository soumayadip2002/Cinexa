import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CheckWidth from "./CheckWidth";
import CastSkeleton from "./CastSkeleton";
import SimilarSkeleton from "./SimilarSkeleton";
const SingleMovieSkeleton = () => {
  const isMobile = CheckWidth();
  return (
    <div className="mt-2 mb-8">
      <div className="">
        <div className="w-[90%] m-auto md:w-[95%]  grid grid-cols-[.9fr,2fr] md:grid-cols-1 gap-8 h-fit">
          <div>
            <SkeletonTheme
              baseColor="#202020"
              highlightColor="#444"
              height="80vh"
            >
              <Skeleton />
            </SkeletonTheme>
          </div>

          <div className="">
            <SkeletonTheme
              baseColor="#202020"
              highlightColor="#444"
              height={isMobile ? "20vh":"80vh"}
            >
              <Skeleton />
            </SkeletonTheme>
          </div>
        </div>

        <CastSkeleton />
        <SimilarSkeleton />
      </div>
    </div>
  );
};

export default SingleMovieSkeleton;
