import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsArchive, BsFiles } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
import { FileType } from "./FileType";
import { AddFile } from "./AddFile";

export const Files = () => {
  const files = [
    {
      name: "Work",
      files: 180,
      textColor: "text-purple-500/90",
      darkTextColor: "dark:text-fuchsia-300",
      darkHoverTextColor: "dark:group-hover:text-fuchsia-500",
      hoverTextColor: "group-hover:text-purple-600",
      icon: BsFiles,
    },
    {
      name: "Personal",
      files: 20,
      textColor: "text-emerald-500/90",
      darkTextColor: "dark:text-green-300",
      darkHoverTextColor: "dark:group-hover:text-green-500",
      hoverTextColor: "group-hover:text-emerald-600",
      icon: AiOutlineUser,
    },
    {
      name: "School",
      files: 40,
      textColor: "text-amber-500/90",
      darkTextColor: "dark:text-yellow-300",
      darkHoverTextColor: "dark:group-hover:text-yellow-500",
      hoverTextColor: "group-hover:text-amber-600",
      icon: TbSchool,
    },
    {
      name: "Archive",
      files: 10,
      textColor: "text-blue-500/90",
      darkTextColor: "dark:text-cyan-300",
      darkHoverTextColor: "dark:group-hover:text-cyan-500",
      hoverTextColor: "group-hover:text-blue-600",
      icon: BsArchive,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bodyFont text-2xl font-extrabold text-sky-950 dark:text-sky-100">
        Files
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {files.map((type) => (
          <FileType type={type} icon={type.icon} />
        ))}
        <AddFile width="w-full" display="md:flex hidden" />
      </div>
      <AddFile width="w-full" display="md:hidden flex" />
    </div>
  );
};
