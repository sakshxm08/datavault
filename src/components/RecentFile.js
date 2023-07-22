import React from "react";
import { TfiMoreAlt } from "react-icons/tfi";
import { BiSolidShareAlt } from "react-icons/bi";
export const RecentFile = ({ type, icon: Icon }) => {
  return (
    <div className="p-3 flex gap-4 items-center justify-between bg-white rounded-lg">
      <div className="flex gap-4 items-center w-48">
        <span
          className={`bg-${type.color}-500/90 text-base p-3 rounded-lg text-white aspect-square w-fit flex justify-center items-center`}
        >
          <Icon />
        </span>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap font-titleFont text-sm font-medium">
          {type.name}
        </span>
      </div>
      <div className="font-bodyFont text-gray-400  text-sm w-20">
        {type.type}
      </div>
      <div className="font-bodyFont text-gray-400  text-sm w-16">
        {type.size}
      </div>
      <div className="rounded-full p-2 hover:bg-sky-100 duration-200 cursor-pointer">
        <BiSolidShareAlt className="text-lg  text-sky-900" />
      </div>
      <div className=" rounded-full p-2 hover:bg-sky-100 duration-200 cursor-pointer">
        <TfiMoreAlt className="text-lg  text-sky-900 " />
      </div>
    </div>
  );
};
