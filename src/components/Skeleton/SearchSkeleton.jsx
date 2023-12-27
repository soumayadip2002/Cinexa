import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SearchSkeleton = () => {
  return (
    <div>
      <div
        className="my-1 border-b-2 border-gray-200  p-1 cursor-pointer hover:bg-[#fcfcfcfc] transition-all duration-300"
      >
        <SkeletonTheme baseColor="#eee" highlightColor="#bbb" height={80}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </SkeletonTheme>
      </div>

      <div className="mt-2 p-1">
      <SkeletonTheme baseColor="#eee" highlightColor="#bbb" height={50}>
          <Skeleton />
        </SkeletonTheme>
      </div>
    </div>
  );
};

export default SearchSkeleton;
