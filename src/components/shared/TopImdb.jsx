import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const TopImdb = ({ movies }) => {
  return (
    <div className="mt-12">
      <ul className="grid grid-cols-9 gap-2 sm:grid-cols-3 md:grid-cols-4">
        <AnimatePresence>
          {movies &&
            movies.map((movie) => (
              <motion.div key={movie.id} layout>
                <li key={movie.id} className="relative">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="poster"
                    className="rounded-lg shadow-lg cursor-pointer"
                  />

                  <div className="absolute bottom-0 left-0">
                    <div
                      className="relative h-[3rem] w-[3rem] rounded-full justify-center flex items-center before:absolute before:h-[2.7rem]
                      before:w-[2.7rem] before:bg-black before:rounded-full"
                      style={{
                        background: `conic-gradient(#38b000 ${
                          movie.vote_average * 10 * 3.6
                        }deg, #222 0deg)`,
                      }}
                    >
                      <p className="text-[#38b000] absolute text-sm flex justify-center items-center">
                        {movie.vote_average}
                      </p>
                    </div>
                  </div>
                </li>
              </motion.div>
            ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default TopImdb;
