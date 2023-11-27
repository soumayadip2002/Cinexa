import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { GrSearch } from "react-icons/gr";
const MobileNav = ({open, setOpen, openSearch, setOpenSearch}) => {
  return (
    <div className="hidden md:block">
      <div className="flex gap-x-2 items-center">
        <div
          className="text-xl text-[#5cb7cf] md:bg-[#5cb7cf] md:p-2 md:rounded-full md:text-white"
          onClick={() => {
            setOpenSearch(!openSearch);
            setOpen(false);
          }}
        >
          <GrSearch />
        </div>
        <div
          className="text-xl bg-[#5cb7cf] p-2 rounded-full text-white hidden md:block"
          onClick={() => {
            setOpen(!open);
            setOpenSearch(false);
          }}
        >
          {open ? <RxCross2 /> : <RiMenu3Line />}
        </div>
      </div>
      <div
        className={`fixed top-20 px-2 py-1 w-[40%] sm:w-[60%]
       m-auto border-b-2 border-[#5cb7cf] hidden md:flex justify-between items-center gap-x-2 bg-gray-700 ${
         openSearch ? "right-4" : "right-[-110%]"
       } transition-all ease-in-out duration-300 text-white z-50`}
      >
        <input
          type="text"
          className="bg-transparent border-none outline-none px-2"
          placeholder="search here..."
        />
        <GrSearch className="text-lg text-[#5cb7cf]" />
      </div>
    </div>
  );
};

export default MobileNav;
