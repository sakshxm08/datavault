import React from "react";
import { BsCloudUploadFill } from "react-icons/bs";
import { userImg, userImg2, userImg3 } from "../assets";
import { Avatar, AvatarGroup } from "@mui/material";
import { Storage } from "./Storage";
import { Link } from "react-router-dom";

export const RightSide = () => {
  return (
    <div className=" sticky top-28 flex flex-col md:flex-row lg:flex-col gap-4">
      <div className="shadow-lg bg-white dark:bg-gray-700 h-fit rounded-3xl p-4 flex flex-col gap-4 w-full">
        <Link to="upload">
          <div className="w-full py-16 flex flex-col gap-4 justify-center items-center bg-sky-100 dark:bg-gray-800 rounded-3xl hover:bg-sky-200 dark:hover:bg-gray-900 duration-200 cursor-pointer">
            <BsCloudUploadFill className="text-5xl text-sky-950 dark:text-sky-50" />
            <span className="font-titleFont font-medium text-lg dark:text-sky-50">
              Add new files
            </span>
          </div>
        </Link>
        <Storage
          bg={"bg-sky-100 dark:bg-gray-800"}
          text={"text-sky-950 dark:text-sky-50"}
          textSmall={"text-sky-700 dark:text-sky-300"}
          textDiff={"text-sky-800 dark:text-sky-400"}
          barClr="bg-blue-600"
        />
      </div>
      <div className="shadow-lg bg-white dark:bg-gray-700 h-fit rounded-3xl p-4 flex flex-col gap-4 w-full">
        <div className="w-full p-4 flex flex-col gap-4 bg-sky-100 dark:bg-gray-800 rounded-2xl">
          <span className="font-titleFont text-base font-bold dark:text-sky-50">
            Your shared folders
          </span>
          <div className="flex flex-col gap-2">
            <div className="bg-emerald-400/40 h-fit p-4 rounded-xl flex justify-between items-center">
              <span className="text-sm w-2/3 min-w-24 font-titleFont font-medium dark:text-sky-50 overflow-hidden whitespace-nowrap text-ellipsis">
                Keynote files
              </span>
              <AvatarGroup max={3} sx={{ width: 56, alignItems: "center" }}>
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  alt="Remy Sharp"
                  src={userImg}
                />
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  alt="Travis Howard"
                  src={userImg2}
                />
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  alt="Cindy Baker"
                  src={userImg3}
                />
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  alt="Agnes Walker"
                  src={userImg}
                />
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  alt="Trevor Henderson"
                  src={userImg}
                />
              </AvatarGroup>
              {/* <div className="flex">
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
              </div> */}
            </div>
            <div className="bg-amber-400/40 w-full h-fit p-4 rounded-xl flex justify-between items-center">
              <span className="text-sm w-2/3 font-titleFont font-medium dark:text-sky-5 overflow-hidden whitespace-nowrap text-ellipsis0">
                Project Report
              </span>
              <AvatarGroup max={3} sx={{ width: 56, fontSize: "14px" }}>
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  alt="Remy Sharp"
                  src={userImg}
                />
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  alt="Travis Howard"
                  src={userImg2}
                />
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  alt="Cindy Baker"
                  src={userImg3}
                />
              </AvatarGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
