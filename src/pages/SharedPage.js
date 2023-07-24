import React from "react";
import { Recent } from "../components/Recent";
import { Shared } from "../components/Shared";
import { recentFiles } from "../extras/recentFiles";

export const SharedPage = () => {
  return (
    <div className="w-full  bg-sky-50 dark:bg-gray-800 justify-around px-20 py-10 flex gap-10">
      <div className="w-full mt-20 flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <Shared />
          <Recent heading="Shared recently" recent={recentFiles} />
        </div>
      </div>
    </div>
  );
};
