import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import HeadingSkeleton from "./HeadingSkeleton";
const TrendingSkeleton = () => {
  return (
    <div className="mt-8">
      <HeadingSkeleton />
      <div className="grid grid-cols-6 gap-3 md:hidden">
        <SkeletonTheme baseColor="#202020" highlightColor="#444" height={300} >
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </SkeletonTheme>
      </div>

      <div className="hidden md:grid sm:hidden grid-cols-3 gap-3">
        <SkeletonTheme baseColor="#202020" highlightColor="#444" height={350}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </SkeletonTheme>
      </div>

      <div className="hidden sm:grid grid-cols-2 gap-3">
        <SkeletonTheme baseColor="#202020" highlightColor="#444" height={250}>
          <Skeleton />
          <Skeleton />
        </SkeletonTheme>
      </div>
    </div>
  );
};

export default TrendingSkeleton;
