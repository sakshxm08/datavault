import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";

export const SharedFile = ({ file }) => {
  return (
    <div
      //   className={`flex flex-col gap-4 rounded-2xl bg-emerald-500/90 p-4 h-fit w-40`}
      className={`flex shadow-xl flex-col gap-4 rounded-2xl bg-white dark:bg-sky-800 group hover:bg-gray-100 dark:hover:bg-sky-900 transition-all active:scale-95 duration-200 cursor-pointer p-4 h-fit w-48`}
    >
      <div className="flex mt-2">
        {/* <span
          // className={`text-fuchsia-300 group-hover:text-emerald-600 duration-200`}
          className={`${file.textColor} ${file.hoverTextColor} ${file.darkTextColor} ${file.darkHoverTextColor} flex items-center justify-center w-full duration-200`}
        > */}
        {/* <span className={`bg-white p-2 rounded-full text-emerald-500/90`}> */}
        {/* <Icon className="text-2xl" /> */}
        <AvatarGroup max={4} sx={{ width: "auto", alignItems: "center" }}>
          {file.images.map((avatar) => {
            return (
              <Avatar
                sx={{ width: 32, height: 32 }}
                alt="Remy Sharp"
                src={avatar}
              />
            );
          })}
        </AvatarGroup>
        {/* </span> */}
      </div>
      <div className="flex flex-col gap-0 font-bodyFont">
        <span
          className={`text-base ${file.textColor} ${file.hoverTextColor} ${file.darkTextColor} ${file.darkHoverTextColor} font-bold`}
          // className={`text-base text-fuchsia-300 group-hover:text-emerald-600 font-bold`}
        >
          {file.name}
        </span>
        <span className={`text-sm text-black dark:text-sky-50`}>
          {file.files} files
        </span>
      </div>
      <div
        className={`w-1/2 mt-2 h-[2px] duration-200 ${file.bgColor} ${file.hoverBgColor} ${file.darkBgColor} ${file.darkHoverBgColor} mx-auto`}
      ></div>
    </div>
  );
};
