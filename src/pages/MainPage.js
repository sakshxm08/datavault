import React from "react";
// import { Search } from "./Search";
import { Categories } from "../components/Categories";
import { Files } from "../components/Files";
import { Recent } from "../components/Recent";
import { RightSide } from "../components/RightSide";
import { recentFiles } from "../extras/recentFiles";

export const MainPage = () => {
  return (
    <div className="w-full  bg-sky-50 dark:bg-gray-800 justify-around  px-20 py-10 flex gap-10">
      <div className="w-3/4 mt-20 flex flex-col gap-8">
        {/* <Search /> */}
        <div className="flex flex-col gap-8">
          <Categories />
          <Files />
          <Recent heading="Recent Files" recent={recentFiles} />
        </div>
      </div>
      <div className="w-1/4">
        <RightSide />
      </div>
    </div>
  );
};
