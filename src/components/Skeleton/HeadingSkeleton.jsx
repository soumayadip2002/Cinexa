import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CheckWidth from "./CheckWidth";
const HeadingSkeleton = () => {
    const isMobile = CheckWidth();
  return (
    <div>
      <div className="py-1 flex mb-3">
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton height={40} width={isMobile ? 200 : 400} />
        </SkeletonTheme>
      </div>
    </div>
  );
};

export default HeadingSkeleton;
