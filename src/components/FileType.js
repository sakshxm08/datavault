import React from "react";

export const FileType = ({ type, icon: Icon }) => {
  return (
    <div
      //   className={`flex flex-col gap-4 rounded-2xl bg-emerald-500/90 p-4 h-fit w-40`}
      className={`flex flex-col gap-2 rounded-2xl bg-white group hover:bg-gray-100 transition-all active:scale-95 duration-200 cursor-pointer p-4 h-fit w-40`}
    >
      <div className="flex">
        <span
          className={`text-${type.color}-500/90 group-hover:text-${type.color}-600 duration-200`}
        >
          {/* <span className={`bg-white p-2 rounded-full text-emerald-500/90`}> */}
          <Icon className="text-2xl" />
        </span>
      </div>
      <div className="flex flex-col gap-0 font-bodyFont">
        <span className={`text-base text-${type.color}-500/90 font-bold`}>
          {type.name}
        </span>
        <span className={`text-sm text-black`}>{type.files} files</span>
      </div>
    </div>
  );
};
