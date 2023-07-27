import React from "react";
// import { Search } from "./Search";
import { Categories } from "../../components/Categories";
import { Files } from "../../components/Files";
import { Recent } from "../../components/Recent";
import { RightSide } from "../../components/RightSide";
import { recentFiles } from "../../extras/recentFiles";

export const MainPage = () => {
  return (
    <div className="w-full  bg-sky-50 dark:bg-gray-800 justify-around px-10 xl:px-20 py-10 flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-2/3 mt-20 flex flex-col gap-8">
        {/* <Search /> */}
        <div className="flex flex-col gap-8">
          <Categories />
          <Files />
          <Recent heading="Recent Files" recent={recentFiles} />
        </div>
      </div>
      <div className="w-full lg:w-1/3">
        <RightSide />
      </div>
    </div>
  );
};
