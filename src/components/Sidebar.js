import React from "react";
import { FaUserLock, FaUsers, FaCloudUploadAlt } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { userImg } from "../assets";
import { Storage } from "./Storage";

export const Sidebar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(navigate("/"));
  };
  return (
    <div className="h-fit min-h-screen sticky top-0 left-0 w-max bg-sky-900 dark:bg-gray-900 flex flex-col gap-10 justify-between py-10 text-white font-titleFont tracking-wide">
      <div className="flex flex-col gap-8">
        <div className=" flex flex-col gap-4  justify-center items-center w-full">
          <img
            src={user ? user.photoURL : userImg}
            className="w-20 rounded-full"
            alt=""
          />
          <div className="flex flex-col gap-1 items-center justify-center font-bodyFont">
            <span className="text-xl">
              {user
                ? user.displayName.split(" ")[0].charAt(0).toUpperCase() +
                  user.displayName.split(" ")[0].slice(1) +
                  " " +
                  user.displayName.split(" ")[1].charAt(0).toUpperCase() +
                  user.displayName.split(" ")[1].slice(1)
                : "Please Login"}
            </span>
            <span className="text-gray-400 px-3 text-sm whitespace-nowrap overflow-hidden text-ellipsis w-64 text-center">
              {user ? user.email : ""}
            </span>
          </div>
        </div>
        <div className="flex flex-col text-base whitespace-nowrap">
          <Link to="">
            <span className="flex gap-4 py-3 pl-8 pr-16  items-center duration-200 cursor-pointer dark:hover:bg-sky-900 hover:bg-sky-950">
              <FaUserLock />
              My Vault
            </span>
          </Link>
          <Link to="shared">
            <span className="flex gap-4 py-3 pl-8 pr-16 items-center duration-200 cursor-pointer hover:bg-sky-950 dark:hover:bg-sky-900">
              <FaUsers />
              Shared files
            </span>
          </Link>
          <span className="flex gap-4 py-3 pl-8 pr-16 items-center duration-200 cursor-pointer hover:bg-sky-950 dark:hover:bg-sky-900">
            <MdFavorite />
            Favorites
          </span>
          <span className="flex gap-4 py-3 pl-8 pr-16 items-center duration-200 cursor-pointer hover:bg-sky-950 dark:hover:bg-sky-900">
            <FaCloudUploadAlt />
            Upload files
          </span>
        </div>
      </div>
      <div className="px-4">
        <Storage
          bg="bg-sky-800/80 dark:bg-sky-950"
          text={"text-sky-50 dark:text-sky-100"}
          textSmall={"text-sky-100 dark:text-sky-300"}
          textDiff={"text-sky-400"}
          barClr="bg-blue-500"
        />
      </div>
      <div>
        <span className="flex gap-4 py-3 pl-8 pr-16 items-center duration-200 cursor-pointer hover:bg-sky-950 dark:hover:bg-sky-900">
          <AiFillSetting className="text-lg" />
          Settings
        </span>
        <span
          onClick={logout}
          className="flex gap-4 py-3 pl-8 pr-16 items-center duration-200 cursor-pointer hover:bg-sky-950 dark:hover:bg-sky-900"
        >
          <FiLogOut className="text-lg" />
          Logout
        </span>
      </div>
    </div>
  );
};
