import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import HeadingSkeleton from "./HeadingSkeleton";
import CheckWidth from "./CheckWidth";
const TopRatedSkeleton = ({ isTopRated }) => {
  const isMobile = CheckWidth();
  return (
    <div className="w-[95%] m-auto mt-12 mb-8">
      <HeadingSkeleton />
      {isTopRated && (
        <div className="py-1 mb-3 flex justify-center">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={40} width={200} className="rounded-3xl" />
          </SkeletonTheme>
        </div>
      )}
      <div className="grid grid-cols-8 gap-2 md:grid-cols-4 sm:grid-cols-3">
        <SkeletonTheme baseColor="#202020" highlightColor="#444" height={isMobile ? "9rem" :"13rem"} enableAnimation={true}>
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

export default TopRatedSkeleton;
