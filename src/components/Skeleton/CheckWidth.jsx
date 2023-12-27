import React, { useEffect, useState } from "react";

const CheckWidth = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleCheckMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleCheckMobile();
    window.addEventListener("resize", handleCheckMobile);

    return () => {
      window.removeEventListener("resize", handleCheckMobile);
    };
  },[]);
  return isMobile;
};

export default CheckWidth;
