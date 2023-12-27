import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SliderSkeleton = () => {
  return (
    <div className="h-screen  rounded-lg w-[99%] m-auto mt-2">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton height={window.innerHeight} />
      </SkeletonTheme>
    </div>
  );
};

export default SliderSkeleton;
