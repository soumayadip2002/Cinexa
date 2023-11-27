import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import loadmore from "/assets/loadmore.svg";
const VideoPlayer = ({ openTrailer, loading, key_code }) => {
  const [isMobile, setIsMobile] = useState(false);
  const handleIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleIsMobile();
    window.addEventListener("resize", handleIsMobile);
    return () => {
      window.removeEventListener("resize", handleIsMobile);
    };
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-[400px] w-[650px] sm:h-[250px] sm:w-[340px] bg-black">
          <img src={loadmore} alt="" className="h-10 w-10" />
        </div>
      ) : key_code ? (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${key_code}`}
          height={isMobile ? 250 : 400}
          width={isMobile ? 430 : 700}
          controls={true}
          playing={openTrailer ? true : false}
        />
      ) : (
        <div className="flex justify-center items-center h-[400px] w-[650px] sm:h-[250px] sm:w-[340px] bg-black">
          <h1>Oops No Trailer Available for this 🙁🙁</h1>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
