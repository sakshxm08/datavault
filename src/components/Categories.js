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
      hoverTextColor: "group-hover:text-purple-600",
      hoverBgColor: "hover:bg-purple-600",
      icon: AiTwotoneCamera,
    },
    {
      name: "Documents",
      files: 20,
      bgColor: "bg-emerald-500/90",
      textColor: "text-emerald-500/90",
      hoverTextColor: "group-hover:text-emerald-600",
      hoverBgColor: "hover:bg-emerald-600",
      icon: HiDocumentDuplicate,
    },
    {
      name: "Videos",
      files: 40,
      bgColor: "bg-amber-500/90",
      textColor: "text-amber-500/90",
      hoverTextColor: "group-hover:text-amber-600",
      hoverBgColor: "hover:bg-amber-600",
      icon: BsFillCameraVideoFill,
    },
    {
      name: "Audio",
      files: 10,
      bgColor: "bg-blue-500/90",
      textColor: "text-blue-500/90",
      hoverTextColor: "group-hover:text-blue-600",
      hoverBgColor: "hover:bg-blue-600",
      icon: MdOutlineAudiotrack,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bodyFont text-2xl font-extrabold text-sky-950">
        Categories
      </h1>
      <div className="flex gap-4">
        {categories.map((category) => (
          <Category category={category} icon={category.icon} />
        ))}
      </div>
    </div>
  );
};
