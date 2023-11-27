import React from "react";
import Loader from "/assets/loading.svg";
const Loading = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-[100]">
      <div className="h-screen flex justify-center items-center">
        <img src={Loader} alt="loading" className="h-20 w-20" />
      </div>
    </div>
  );
};

export default Loading;
