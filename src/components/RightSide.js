import React from "react";
import { BsCloudUploadFill } from "react-icons/bs";
import { userImg, userImg2, userImg3 } from "../assets";

export const RightSide = () => {
  const storageUsed = "80";
  return (
    <div className="sticky top-10 flex flex-col gap-4">
      <div className="bg-white  h-fit rounded-3xl p-4 flex flex-col gap-4">
        <div className="w-full py-24 flex flex-col gap-4 justify-center items-center bg-sky-100 rounded-3xl hover:bg-sky-200 duration-200 cursor-pointer">
          <BsCloudUploadFill className="text-5xl text-sky-950" />
          <span className="font-titleFont font-medium text-lg">
            Add new files
          </span>
        </div>
        <div className="w-full p-4 flex flex-col gap-4 bg-sky-100 rounded-3xl">
          <div className="flex justify-between items-center">
            <span className="font-titleFont text-base font-bold">
              Your storage
            </span>
            <span className="font-bodyFont text-sm font-semibold text-sky-800">
              {100 - storageUsed}% left
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bodyFont font-medium text-sky-700 text-sm">
              {storageUsed} GB of 100 GB used
            </span>
            <div class="w-full h-2 bg-blue-200 rounded-full">
              <div
                class={`w-[${storageUsed}%] h-full text-center text-xs text-white bg-blue-600 rounded-full`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-fit rounded-3xl p-4 flex flex-col gap-4">
        <div className="w-full p-4 flex flex-col gap-4 bg-sky-100 rounded-2xl">
          <span className="font-titleFont text-base font-bold">
            Your shared folders
          </span>
          <div className="flex flex-col gap-2">
            <div className="bg-emerald-400/40 w-full h-fit p-4 rounded-xl flex justify-between items-center">
              <span className="text-sm font-titleFont font-medium">
                Keynote files
              </span>
              <div className="flex">
                <span className="-ml-3 z-[1]">
                  <img
                    src={userImg}
                    className="w-8 border-white border-2 rounded-full"
                    alt=""
                  />
                </span>
                <span className="-ml-3 z-[2]">
                  <img
                    src={userImg2}
                    className="w-8 border-white border-2 rounded-full"
                    alt=""
                  />
                </span>
                <span className="-ml-3 z-[3]">
                  <img
                    src={userImg3}
                    className="w-8 border-white border-2 rounded-full"
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="bg-amber-400/40 w-full h-fit p-4 rounded-xl flex justify-between items-center">
              <span className="text-sm font-titleFont font-medium">
                Project Report
              </span>
              <div className="flex">
                <span className="-ml-3 z-[1]">
                  <img
                    src={userImg}
                    className="w-8 border-white border-2 rounded-full"
                    alt=""
                  />
                </span>
                <span className="-ml-3 z-[2]">
                  <img
                    src={userImg2}
                    className="w-8 border-white border-2 rounded-full"
                    alt=""
                  />
                </span>
                <span className="-ml-3 z-[3]">
                  <img
                    src={userImg3}
                    className="w-8 border-white border-2 rounded-full"
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
