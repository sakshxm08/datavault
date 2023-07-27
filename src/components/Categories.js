import React from "react";
import { Category } from "./Category";
import { AiTwotoneCamera } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdOutlineAudiotrack } from "react-icons/md";
import { HiDocumentDuplicate } from "react-icons/hi";

export const Categories = () => {
  const categories = [
    {
      name: "Pictures",
      files: 180,
      bgColor: "bg-purple-500/90",
      textColor: "text-purple-500/90",
      hoverBgColor: "hover:bg-purple-600",
      hoverTextColor: "group-hover:text-purple-600",
      darkTextColor: "dark:text-fuchsia-300",
      darkBgColor: "dark:bg-fuchsia-300",
      darkHoverTextColor: "dark:group-hover:text-fuchsia-500",
      darkHoverBgColor: "dark:hover:bg-fuchsia-500",
      icon: AiTwotoneCamera,
    },
    {
      name: "Documents",
      files: 20,
      bgColor: "bg-emerald-500/90",
      textColor: "text-emerald-500/90",
      hoverTextColor: "group-hover:text-emerald-600",
      hoverBgColor: "hover:bg-emerald-600",
      darkTextColor: "dark:text-green-300",
      darkBgColor: "dark:bg-green-300",
      darkHoverTextColor: "dark:group-hover:text-green-500",
      darkHoverBgColor: "dark:hover:bg-green-500",
      icon: HiDocumentDuplicate,
    },
    {
      name: "Videos",
      files: 40,
      bgColor: "bg-amber-500/90",
      textColor: "text-amber-500/90",
      hoverTextColor: "group-hover:text-amber-600",
      hoverBgColor: "hover:bg-amber-600",
      darkTextColor: "dark:text-yellow-300",
      darkBgColor: "dark:bg-yellow-300",
      darkHoverTextColor: "dark:group-hover:text-yellow-500",
      darkHoverBgColor: "dark:hover:bg-yellow-500",
      icon: BsFillCameraVideoFill,
    },
    {
      name: "Audio",
      files: 10,
      bgColor: "bg-blue-500/90",
      textColor: "text-blue-500/90",
      hoverTextColor: "group-hover:text-blue-600",
      hoverBgColor: "hover:bg-blue-600",
      darkTextColor: "dark:text-cyan-300",
      darkBgColor: "dark:bg-cyan-300",
      darkHoverTextColor: "dark:group-hover:text-cyan-500",
      darkHoverBgColor: "dark:hover:bg-cyan-500",
      icon: MdOutlineAudiotrack,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bodyFont text-2xl font-extrabold text-sky-950 dark:text-sky-100">
        Categories
      </h1>
      <div className="grid grid-cols-2 min-[580px]:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Category category={category} icon={category.icon} />
        ))}
      </div>
    </div>
  );
};
