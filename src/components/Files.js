import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsArchive, BsFiles } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
import { FileType } from "./FileType";

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
      <div className="flex gap-4">
        {files.map((type) => (
          <FileType type={type} icon={type.icon} />
        ))}
        <div
          //   className={`flex flex-col gap-4 rounded-2xl bg-emerald-500/90 p-4 h-fit w-40`}
          className={`flex items-center justify-center h-full gap-2 rounded-2xl text-sky-900 dark:text-sky-100 dark:hover:bg-sky-950/70 bg-sky-50 dark:bg-sky-950 hover:bg-sky-200 transition-all active:scale-95 duration-200 cursor-pointer p-4 text-4xl font-light w-40`}
        >
          +
        </div>
      </div>
    </div>
  );
};
