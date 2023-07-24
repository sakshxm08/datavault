import React from "react";

export const Storage = ({ bg, text, textSmall, textDiff, barClr }) => {
  const storageUsed = "80";
  const storageClass = `w-[${storageUsed}%]`;
  return (
    <div
      className={`shadow-lg w-full p-4 flex flex-col gap-4 ${bg}  rounded-3xl`}
    >
      <div className="flex justify-between items-center">
        <span className={`font-titleFont text-base font-bold ${text}`}>
          Your storage
        </span>
        <span className={`font-bodyFont text-sm font-semibold ${textDiff}`}>
          {100 - storageUsed}% left
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <span className={`font-bodyFont font-medium ${textSmall} text-sm`}>
          {storageUsed} GB of 100 GB used
        </span>
        <div class="w-full h-2 bg-blue-200 rounded-full">
          <div
            class={`${storageClass} h-full text-center text-xs text-white ${barClr} rounded-full`}
          ></div>
        </div>
      </div>
    </div>
  );
};
