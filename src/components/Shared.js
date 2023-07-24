import React from "react";
import { AddFile } from "./AddFile";
import { BsArchive, BsFiles } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { TbSchool } from "react-icons/tb";
import { SharedFile } from "./SharedFile";
import { userImg, userImg2, userImg3 } from "../assets";

export const Shared = () => {
  const files = [
    {
      name: "Work",
      files: 180,
      textColor: "text-purple-500/90",
      hoverTextColor: "group-hover:text-purple-600",
      darkTextColor: "dark:text-fuchsia-300",
      darkHoverTextColor: "dark:group-hover:text-fuchsia-500",
      bgColor: "bg-purple-500/90",
      hoverBgColor: "group-hover:bg-purple-600",
      darkBgColor: "dark:bg-fuchsia-300",
      darkHoverBgColor: "dark:group-hover:bg-fuchsia-500",
      icon: BsFiles,
      images: [userImg, userImg2, userImg3, userImg],
    },
    {
      name: "Personal",
      files: 20,
      textColor: "text-emerald-500/90",
      hoverTextColor: "group-hover:text-emerald-600",
      darkTextColor: "dark:text-green-300",
      darkHoverTextColor: "dark:group-hover:text-green-500",
      bgColor: "bg-emerald-500/90",
      hoverBgColor: "group-hover:bg-emerald-600",
      darkBgColor: "dark:bg-green-300",
      darkHoverBgColor: "dark:group-hover:bg-green-500",
      icon: AiOutlineUser,
      images: [userImg3],
    },
    {
      name: "School",
      files: 40,
      textColor: "text-amber-500/90",
      hoverTextColor: "group-hover:text-amber-600",
      darkTextColor: "dark:text-yellow-300",
      darkHoverTextColor: "dark:group-hover:text-yellow-500",
      bgColor: "bg-amber-500/90",
      hoverBgColor: "group-hover:bg-amber-600",
      darkBgColor: "dark:bg-yellow-300",
      darkHoverBgColor: "dark:group-hover:bg-yellow-500",
      icon: TbSchool,
      images: [userImg2, userImg3, userImg],
    },
    {
      name: "Archive",
      files: 10,
      textColor: "text-blue-500/90",
      hoverTextColor: "group-hover:text-blue-600",
      darkTextColor: "dark:text-cyan-300",
      darkHoverTextColor: "dark:group-hover:text-cyan-500",
      bgColor: "bg-blue-500/90",
      hoverBgColor: "group-hover:bg-blue-600",
      darkBgColor: "dark:bg-cyan-300",
      darkHoverBgColor: "dark:group-hover:bg-cyan-500",
      icon: BsArchive,
      images: [userImg, userImg2],
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bodyFont text-4xl  font-extrabold text-sky-950 dark:text-sky-100">
        Your Shared Files
      </h1>
      <div className="flex gap-4">
        {files.map((file) => (
          <SharedFile file={file} />
        ))}
        <AddFile width="w-48" />
      </div>
    </div>
  );
};
