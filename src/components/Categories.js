import React from "react";
import { Category } from "./Category";
import { AiTwotoneCamera } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdOutlineAudiotrack } from "react-icons/md";
import { HiDocumentDuplicate } from "react-icons/hi";

export const Categories = () => {
  const categories = [
    { name: "Pictures", files: 180, color: "purple", icon: AiTwotoneCamera },
    {
      name: "Documents",
      files: 20,
      color: "emerald",
      icon: HiDocumentDuplicate,
    },
    { name: "Videos", files: 40, color: "amber", icon: BsFillCameraVideoFill },
    { name: "Audio", files: 10, color: "blue", icon: MdOutlineAudiotrack },
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
