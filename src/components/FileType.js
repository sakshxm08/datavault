import React from "react";

export const FileType = ({ type, icon: Icon }) => {
  return (
    <div
      //   className={`flex flex-col gap-4 rounded-2xl bg-emerald-500/90 p-4 h-fit w-40`}
      className={`shadow-xl flex flex-col gap-2 rounded-2xl bg-white dark:bg-sky-800 group hover:bg-gray-100 dark:hover:bg-sky-900 transition-all active:scale-95 duration-200 cursor-pointer p-4 h-fit w-full`}
    >
      <div className="flex">
        <span
          // className={`text-fuchsia-300 group-hover:text-emerald-600 duration-200`}
          className={`${type.textColor} ${type.hoverTextColor} ${type.darkTextColor} ${type.darkHoverTextColor} duration-200`}
        >
          {/* <span className={`bg-white p-2 rounded-full text-emerald-500/90`}> */}
          <Icon className="text-2xl" />
        </span>
      </div>
      <div className="flex flex-col gap-0 font-bodyFont">
        <span
          className={`text-base ${type.textColor} ${type.hoverTextColor} ${type.darkTextColor} ${type.darkHoverTextColor} font-bold`}
          // className={`text-base text-fuchsia-300 group-hover:text-emerald-600 font-bold`}
        >
          {type.name}
        </span>
        <span className={`text-sm text-black dark:text-sky-50`}>
          {type.files} files
        </span>
      </div>
    </div>
  );
};
