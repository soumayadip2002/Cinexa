import React from "react";
import { BiCameraMovie } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { RiArrowUpSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { BiCopyright } from "react-icons/bi";
const Footer = () => {
  const navigate = useNavigate();
  const nav_item = [
    {
      id: 0,
      name: "Home",
      path: "",
    },

    {
      id: 1,
      name: "Movies",
      path: "movies",
    },
    {
      id: 2,
      name: "Tvshows",
      path: "tvshows",
    },
  ];

  const Socials = [
    {
      id: 0,
      icon: <BsFacebook />,
    },
    {
      id: 1,
      icon: <SiInstagram />,
    },
    {
      id: 2,
      icon: <BsTwitterX />,
    },

    {
      id: 3,
      icon: <SiWhatsapp />,
    },
  ];
  return (
    <footer className="w-full bg-[#001233] relative">
      <div className="w-[95%] m-auto px-8 pt-8 pb-2">
        <div className="grid grid-cols-4 gap-4  sm:grid-cols-1">
          <div>
            <div className="flex items-center gap-x-1">
              <BiCameraMovie className="text-5xl md:text-3xl text-[#5cb7ef] mt-[-.7rem]" />
              <p className="text-2xl md:text-2xl">Cinexa</p>
            </div>
          </div>

          <ul className="grid gap-y-2">
            {nav_item.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                    navigate(`/${item.path}`)
                }}
                className="flex cursor-pointer 
                    gap-x-1 items-center hover:text-[#5cb7cf] transition-all duration-300 ease-linear group"
              >
                <p>{item.name}</p>
                <GoArrowRight className="group-hover:ml-1" />
              </li>
            ))}
          </ul>

          <div>
            <ul className="flex gap-3 sm:grid">
              {Socials.map((social) => (
                <li
                  key={social.id}
                  className="flex items-center cursor-pointer hover:text-[#5cb7cf] transition-all duration-300 ease-linear"
                >
                  <p className="text-2xl">{social.icon}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute right-8 sm:right-4 cursor-pointer" onClick={()=>window.scrollTo(0,0)}>
            <div
              className="h-[3rem] w-[3rem] rounded-full bg-[#5cb7cf] flex items-center justify-center
            hover:bg-[#71d8f1] transition-all duration-300 ease-linear"
            >
              <RiArrowUpSLine className="text-4xl" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-12 ">
            <div className="flex gap-x-1 items-center">
                
                <BiCopyright />
                <p className="text-sm">Created by <span className="text-pink-700">Soumayadip Saha</span></p>
            </div>
            <p className="flex items-center mt-2 text-[.7rem] text-[#5cb7cf]">Provider TMDB api</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
