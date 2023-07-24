import React from "react";
import { logo, sgLogo, tailwindLogo } from "../assets";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="h-36 bg-sky-50 dark:bg-gray-800 w-full relative flex justify-center items-center">
        <div className="w-11/12 xl:w-4/5 bg-sky-700 dark:bg-sky-800 text-white px-6 lg:px-10 gap-6 lg:gap-10 text-center h-fit py-10 sm:py-0 sm:h-56 md:h-44 absolute top-0 sm:top-8 md:top-16 rounded-xl shadow-lg  flex flex-col md:flex-row justify-center md:justify-around items-center">
          <span className="font-titleFont text-3xl lg:text-4xl font-bold ">
            Have feedback about the website?
          </span>
          <span className="font-titleFont text-base lg:text-lg font-light">
            Interested in working together? We should queue up a time to chat.
          </span>
          <Link to="https://sakshxm08.netlify.app/#contact" target="_blank">
            <button className="bg-transparent border-4 hover:bg-sky-300 duration-200 hover:text-sky-950  border-sky-300 rounded-full whitespace-nowrap px-6 py-2 text-lg lg:text-xl font-titleFont ">
              Let's do this !
            </button>
          </Link>
        </div>
      </div>
      <div className="pt-64 sm:pt-44 pb-20 bg-sky-500 dark:bg-sky-950 w-full flex flex-col gap-20 justify-center items-center">
        <div className="flex mobile:flex-row flex-col gap-0 mobile:gap-8 items-center justify-center ">
          <Link to="/">
            <div className="flex gap-3 relative items-center after:absolute after:-bottom-4 after:scale-x-0 hover:after:scale-x-100 after:duration-200 cursor-pointer after:h-[2px] after:w-full after:bg-sky-950 dark:after:bg-sky-100">
              <span>
                <img src={logo} className="w-12 sm:w-16" alt="" />
              </span>
              <span className="font-titleFont text-sky-950 dark:text-sky-100 text-xl sm:text-3xl font-medium">
                DataVault
              </span>
            </div>
          </Link>

          <div className=" w-[1px] h-12 sm:h-16 text-sky-950 dark:text-sky-100 font-titleFont text-lg flex justify-center items-center">
            by
          </div>
          {/* <div className="mobile:block hidden w-[1px] h-12 sm:h-16 bg-sky-950 dark:bg-sky-100"></div> */}
          <Link to="https://sakshxm08.netlify.app" target="_blank">
            <div className="flex gap-3 relative items-center after:absolute after:-bottom-4 after:scale-x-0 hover:after:scale-x-100 after:duration-200 cursor-pointer after:h-[2px] after:w-full after:bg-sky-950 dark:after:bg-sky-100">
              <span className="bg-sky-900 p-2 rounded-full">
                <img src={sgLogo} className="w-8 sm:w-12" alt="" />
              </span>
              <span className="font-titleFont text-sky-950 dark:text-sky-100 text-xl sm:text-3xl font-medium">
                sakshxm08
              </span>
            </div>
          </Link>
        </div>
        <div className="font-titleFont text-xl font-light flex flex-col items-center justify-center gap-8 dark:text-sky-100">
          <div className="flex sm:flex-row flex-col sm:items-start items-center justify-center gap-2">
            Handcrafted by{" "}
            <Link
              className="after:w-full flex flex-col after:h-[1px] after:bg-sky-900 dark:after:bg-sky-200 sm:gap-2 after:scale-x-0 hover:after:scale-x-100 after:duration-200 duration-200 text-sky-900 dark:text-sky-50 hover:text-sky-950 dark:hover:text-sky-200 "
              to="https://sakshxm08.netlify.app"
              target="_blank"
            >
              @sakshxm08
            </Link>{" "}
            &copy;twentytwentythree
          </div>
          <div className="w-fit flex items-center justify-center gap-2 bg-white text-black px-4 py-1 rounded text-xs">
            Made with{" "}
            <Link to="https://tailwindcss.com/">
              <img src={tailwindLogo} className="h-3" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
