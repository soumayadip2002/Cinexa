import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import country_details from "./country_item";
import { IoChevronDown } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
const NavLink = () => {
  const [genre, setGenre] = useState([]);
  const [menu, setMenu] = useState("");
  const navigate = useNavigate();
  const api = import.meta.env.VITE_TMDB_API;
  //console.log(menu)
  const getGenre = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language=en-US`
      );
      const data = await response.json();
      setGenre(data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGenre();
  }, []);
  const nav_links = [
    {
      id: 1,
      name: "genre",
      data: genre,
    },
    {
      id: 2,
      name: "country",
      data: country_details,
    },
  ];
  return (
    <div>
      <div className="flex items-center gap-x-1 cursor-pointer md:grid md:gap-y-4 md:absolute">
        {nav_links.map((link) => (
          <div key={link.id}>
            <div className="group"                 onMouseEnter={() => {
                  menu !== link.name ? setMenu(link.name) : setMenu("");
                }}
                onMouseLeave={() => {
                  setMenu("");
                }}>
              <div
                className="flex items-center gap-x-1 hover:text-[#5cb7ef] px-2 py-1"

              >
                <h2 className="">
                  {link.name}
                </h2>
                <p>
                  {menu === link.name ? <IoIosArrowUp /> : <IoChevronDown />}
                </p>
              </div>
              {/* dekstop menu */}
              <div
                className="absolute group-hover:block group-hover:md:hidden hidden hover:md:hidden hover:block bg-black 
              shadow-lg rounded-lg z-50"
              >
                <div className="p-4 grid grid-cols-3 gap-x-3 gap-y-1 text-[1rem]">
                  {link.data ? (
                    link.data.map((info) => (
                      <div
                        onClick={() =>
                          navigate(
                            info.iso_3166_1
                              ? `/country/${info.iso_3166_1}`
                              : `/${info.name}/${info.id}`
                          )
                        }
                        key={info.iso_3166_1 ? info.iso_3166_1 : info.id}
                        className="px-2 py-1 hover:underline hover:text-[#5cb7cf]"
                      >
                        {info.name.length > 10
                          ? info.name.slice(0, 10) + ".."
                          : info.name}
                      </div>
                    ))
                  ) : (
                    <p className="text-2xl">loading....</p>
                  )}
                </div>
              </div>

              {/* Mobile, Tab menh */}
              <div
                className={`${
                  menu === link.name ? "md:block" : "md:hidden"
                } hidden`}
              >
                <div className="grid grid-cols-4 sm:grid-cols-3 gap-2">
                  {link.data.map((info) => (
                    <Link
                      to={
                        info.iso_3166_1
                          ? `/country/${info.iso_3166_1}`
                          : `/${info.name}/${info.id}`
                      }
                      key={info.iso_3166_1 ? info.iso_3166_1 : info.id}
                      className="px-2 py-1 hover:underline hover:text-[#5cb7cf] ml-2 text-sm"
                    >
                      {info.name.length > 10
                        ? info.name.slice(0, 10) + ".."
                        : info.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavLink;
