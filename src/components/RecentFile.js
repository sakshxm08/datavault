import React from "react";
import { TfiMoreAlt } from "react-icons/tfi";
import { BiSolidShareAlt } from "react-icons/bi";
export const RecentFile = ({ type, icon: Icon }) => {
  return (
    <div className="shadow p-3 hidden min-[580px]:flex gap-4 items-center justify-between bg-white dark:bg-sky-800 rounded-lg">
      <div className="flex gap-4 items-center w-48">
        <span
          className={`bg-${type.color}-500/90 text-base p-3 rounded-lg text-white dark:text-gray-800 aspect-square w-fit flex justify-center items-center`}
        >
          <Icon />
        </span>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap font-titleFont text-sm font-medium text-black dark:text-sky-50">
          {type.name}
        </span>
      </div>
      <div className="font-bodyFont text-gray-400  text-sm w-20">
        {type.type}
      </div>
      <div className="font-bodyFont text-gray-400  text-sm w-16">
        {type.size}
      </div>
      <div className="rounded-full p-2 hover:bg-sky-100 dark:hover:bg-sky-950 duration-200 cursor-pointer">
        <BiSolidShareAlt className="text-lg  text-sky-900 dark:text-sky-50" />
      </div>
      <div className=" rounded-full p-2 hover:bg-sky-100 dark:hover:bg-sky-950 duration-200 cursor-pointer">
        <TfiMoreAlt className="text-lg  text-sky-900 dark:text-sky-50" />
      </div>
    </div>
  );
};
