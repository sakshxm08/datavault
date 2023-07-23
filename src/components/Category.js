import React from "react";
export const Category = ({ category, icon: Icon }) => {
  // const style = {
  //   backgroundColor: category.color,
  // };
  return (
    <div
      className={`flex flex-col gap-4 rounded-2xl ${category.bgColor} group ${category.hoverBgColor} transition-all active:scale-95 duration-200 cursor-pointer p-4 h-fit w-40`}
      // className={`flex flex-col gap-4 rounded-2xl bg-${category.color}-500/90 group hover:bg-${category.color}-600 transition-all active:scale-95 duration-200 cursor-pointer p-4 h-fit w-40`}
    >
      <div className="flex">
        <span
          className={`bg-white p-2 rounded-full ${category.textColor} ${category.hoverTextColor} duration-200`}
        >
          {/* <span className={`bg-white p-2 rounded-full text-emerald-500/90`}> */}
          <Icon className="text-xl" />
        </span>
      </div>
      <div className="flex flex-col gap-0 font-bodyFont">
        <span className="text-base text-white font-bold">{category.name}</span>
        <span className=" text-gray-200 text-sm ">{category.files} files</span>
      </div>
    </div>
  );
};
