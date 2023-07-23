import React from "react";
import { logo, userImg } from "../assets";
import { FaUserLock, FaUsers, FaCloudUploadAlt } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export const Sidebar = () => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(navigate("/"));
  };
  return (
    <div className="h-screen sticky top-0 left-0 w-max bg-sky-900 flex flex-col justify-between py-10 text-white font-titleFont tracking-wide">
      <div className="flex flex-col gap-8">
        <div className=" flex flex-col gap-4  justify-center items-center w-full">
          <img src={userImg} className="w-20 rounded-full" alt="" />
          <div className="flex flex-col gap-1 items-center justify-center font-bodyFont">
            <span className="text-xl">Saksham Gambhir</span>
            <span className="text-gray-400 px-3 text-sm">
              saksham2211gambhir@gmail.com
            </span>
          </div>
        </div>
        <div className="flex flex-col text-base ">
          <span className="flex gap-4 py-3 pl-8 pr-16 items-center duration-200 cursor-pointer hover:bg-sky-950">
            <FaUserLock />
            My Vault
          </span>
          <span className="flex gap-4 py-3 pl-8 pr-16 items-center duration-200 cursor-pointer hover:bg-sky-950">
            <FaUsers />
            Shared files
          </span>
          <span className="flex gap-4 py-3 pl-8 pr-16 items-center duration-200 cursor-pointer hover:bg-sky-950">
            <MdFavorite />
            Favorites
          </span>
          <span className="flex gap-4 py-3 pl-8 pr-16 items-center duration-200 cursor-pointer hover:bg-sky-950">
            <FaCloudUploadAlt />
            Upload files
          </span>
        </div>
      </div>
      <div>
        <span className="flex gap-4 py-3 pl-8 pr-16 items-center duration-200 cursor-pointer hover:bg-sky-950">
          <AiFillSetting className="text-lg" />
          Settings
        </span>
        <span
          onClick={logout}
          className="flex gap-4 py-3 pl-8 pr-16 items-center duration-200 cursor-pointer hover:bg-sky-950"
        >
          <FiLogOut className="text-lg" />
          Logout
        </span>
      </div>
    </div>
  );
};
