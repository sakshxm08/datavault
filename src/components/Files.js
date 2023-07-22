import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsArchive, BsFiles } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
import { FileType } from "./FileType";

export const Files = () => {
  const files = [
    { name: "Work", files: 180, color: "purple", icon: BsFiles },
    {
      name: "Personal",
      files: 20,
      color: "emerald",
      icon: AiOutlineUser,
    },
    { name: "School", files: 40, color: "amber", icon: TbSchool },
    { name: "Archive", files: 10, color: "blue", icon: BsArchive },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bodyFont text-2xl font-extrabold text-sky-950">
        Files
      </h1>
      <div className="flex gap-4">
        {files.map((type) => (
          <FileType type={type} icon={type.icon} />
        ))}
        <div
          //   className={`flex flex-col gap-4 rounded-2xl bg-emerald-500/90 p-4 h-fit w-40`}
          className={`flex items-center justify-center h-full gap-2 rounded-2xl text-sky-900 bg-sky-50 hover:bg-sky-200 transition-all active:scale-95 duration-200 cursor-pointer p-4 text-4xl font-light w-40`}
        >
          +
        </div>
      </div>
    </div>
  );
};
