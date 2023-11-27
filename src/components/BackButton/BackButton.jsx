import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
const BackButton = () => {
  return (
    <div className="px-2 py-1 my-2 bg-[#06d6a0] hover:bg-[#81b29a] text-3xl w-fit rounded-lg shadow-lg transition-all duration-300 ease-in">
      <Link to="/">
        <IoArrowBack />
      </Link>
    </div>
  );
};

export default BackButton;
