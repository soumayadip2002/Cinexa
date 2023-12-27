import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CheckWidth from "./CheckWidth";
const GenreCountrySkeleton = ({ isLoading }) => {
  const isMobile = CheckWidth();
  return (
    <div className="w-[95%] m-auto mt-8 mb-8">
      {!isLoading ? (
        <div className="py-3">
          <SkeletonTheme
            baseColor="#202020"
            highlightColor="#444"
            height={50}
            width={isMobile ? 150 : 300}
          >
            <Skeleton />
          </SkeletonTheme>
        </div>
      ) : (
        ""
      )}

      <div className="grid grid-cols-6 gap-4 lg:grid-cols-5 mt-5  md:grid-cols-3 sm:grid-cols-2">
        <SkeletonTheme
          baseColor="#202020"
          highlightColor="#444"
          height={isMobile ? "15rem" : "19rem"}
          enableAnimation={true}
        >
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </SkeletonTheme>
      </div>
    </div>
  );
};

export default GenreCountrySkeleton;
