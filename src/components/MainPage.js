import React from "react";
// import { Search } from "./Search";
import { Categories } from "./Categories";
import { Files } from "./Files";
import { Recent } from "./Recent";
import { RightSide } from "./RightSide";

export const MainPage = () => {
  return (
    <div className="w-full  bg-sky-100 dark:bg-gray-800 justify-around  px-20 py-10 flex gap-10">
      <div className="w-3/4 mt-20 flex flex-col gap-8">
        {/* <Search /> */}
        <div className="flex flex-col gap-8">
          <Categories />
          <Files />
          <Recent />
        </div>
      </div>
      <div className="w-1/4">
        <RightSide />
      </div>
    </div>
  );
};
