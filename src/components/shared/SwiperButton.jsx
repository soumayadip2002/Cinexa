import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
export const SwiperButton = () => {
  const swiper = useSwiper();
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);
  useEffect(()=>{
    const handleSlideChange = ()=>{
        setStart(swiper.isBeginning);
        setEnd(swiper.isEnd)
    };

    swiper.on("slideChange", handleSlideChange);
    return()=>{
        swiper.off("slideChange", handleSlideChange);
    }
  }, [swiper]);
  return (
    <div>
      <div
        className={`absolute top-2 left-2 z-[50] 
         bg-[#1b4332] hover:bg-[#40916c] transition-all duration-200 ease-in 
         p-1 sm:p-[.15rem] sm:top-0 rounded-full text-4xl sm:text-2xl 
        flex items-center ${start ? 'hidden':""}`}
      >
        <button onClick={() => swiper.slidePrev()}>
          <HiOutlineArrowSmLeft />
        </button>
      </div>
      <div
        className={`absolute top-2 right-2 z-[50] bg-[#1b4332] hover:bg-[#40916c] transition-all duration-200 ease-in p-1 
        sm:p-[.15rem] sm:top-0 rounded-full text-4xl sm:text-2xl flex items-center ${end ? "hidden":""}`}
      >
        <button onClick={() => swiper.slideNext()}>
          <HiOutlineArrowSmRight />
        </button>
      </div>
    </div>
  );
};
