import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const NavSkeleton = () => {
  return (
    <div className="z-[1000] w-[99%] m-auto">
      <div className="md:hidden">
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton height={80} />
        </SkeletonTheme>
      </div>

      <div className="md:block hidden">
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton height={50} />
        </SkeletonTheme>
      </div>
    </div>
  );
};

export default NavSkeleton;
