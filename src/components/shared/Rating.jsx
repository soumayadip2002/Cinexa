import React, { useEffect, useState } from "react";

const Rating = ({ value }) => {
    const [percentage, setPercentage] = useState(0);
    //console.log(percentage)
    const updatePercentage = () => {
      let start = 0;
  
      const animate = () => {
        start++;
        setPercentage(start);
  
        if (start <= value) {
          requestAnimationFrame(animate);
        }
      };
  
      animate();
    };
  
    // Call updatePercentage when the component mounts or when the value changes
    React.useEffect(() => {
      updatePercentage();
    }, [value]);
  return (
    <div className="">
      <div
        className="h-[4rem] w-[4rem] flex justify-center sm:h-[3rem] sm:w-[3rem] before:sm:h-[2.6rem] before:sm:w-[2.6rem] items-center 
        rounded-full relative
        before:absolute before:h-[3.6rem] before:w-[3.6rem] before:bg-[#000] before:rounded-full"
        style={{
          background: `conic-gradient(${value>60 ? "#38b000" : value>40?"#ffdd00":"#dc2f02"} ${percentage * 3.6}deg, #222 0deg)`,
        }}
      >
        <div className={`absolute flex justify-center items-center ${value>60 ? "text-[#38b000]" : value>40?"text-[#ffdd00]":"text-[#dc2f02]"}`}>
            {Math.floor(value )+"%"}
        </div>
      </div>
    </div>
  );
};

export default Rating;
