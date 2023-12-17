import React, { useEffect, useState } from "react";
import { RiMovie2Line } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import DekstopSearch from "./DekstopSearch";
import NavLink from "./NavLink";
const Navbar = () => {
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const hanleFxNavbar = () => {
    setFixedNavbar(window.scrollY > 200);
  };

  useEffect(() => {
    hanleFxNavbar();
    window.addEventListener("scroll", hanleFxNavbar);
    return () => {
      window.removeEventListener("scroll", hanleFxNavbar);
    };
  }, []);
  useEffect(()=>{
    const handleScroll = ()=>{
      setOpen(false)
    };
    window.addEventListener('scroll', handleScroll);
    return()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  },[])
  const nav_items = [
    {
      id: 1,
      name: "home",
      path: "/",
    },
    {
      id: 2,
      name: "movies",
      path: "/movies",
    },
    {
      id: 3,
      name: "tvshows",
      path: "/tvshows",
    },
  ];
  return (
    <nav
      className={`top-0 w-full md:px-2 transition-all duration-300  
      ease-in bg-gradient-to-b from-black  to-transparent py-[1rem] px-[3rem] ${
        fixedNavbar ? "fixed" : ""
      }  flex justify-between items-center z-[1000]`}
    >
      <div className="flex items-center  gap-x-1 z-50">
        <RiMovie2Line className="text-5xl md:text-3xl text-[#5cb7ef]" />
        <p className="text-2xl md:text-2xl">Cinexa</p>
      </div>
      <ul
        className={`flex gap-x-2 text-lg md:fixed ${
          open ? "md:left-0" : "md:left-[-110%]"
        } transition-all ease-linear duration-300
        md:top-[4.2rem] sm:w-full md:w-[70%] md:overflow-y-auto md:h-[100vh] md:pt-60 z-50 sm:pt-20 md:flex-col md:bg-gradient-to-t from-black to-slate-900 md:shadow-md md:px-3
       md:gap-y-4`}
      >
        {nav_items.map((item) => (
          <li
            onClick={() => {
              navigate(`${item.path}`);
            }}
            className={`px-2 py-1 hover:text-[#5cb7ef] relative overflow-hidden cursor-pointer ${
              location.pathname === item.path ? "active" : "" 
            }`}
            key={item.id}
          >
            {item.name}
          </li>
        ))}
        <NavLink />
      </ul>
      <DekstopSearch open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
