import React from "react";
import { FilePreview } from "./FilePreview";

export const AllFiles = () => {
  const files = [
    {
      name: "Meeting Room",
      img: "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "July 24, 2023",
    },
    {
      name: "Building",
      img: "https://images.pexels.com/photos/305833/pexels-photo-305833.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "June 8, 2023",
    },
    {
      name: "Office",
      img: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "July 16, 2023",
    },
    {
      name: "Metro City",
      img: "https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "May 18, 2023",
    },
    {
      name: "Skyscrapers",
      img: "https://images.pexels.com/photos/425122/pexels-photo-425122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "August 18, 2022",
    },
    {
      name: "Aesthetic",
      img: "https://images.pexels.com/photos/432185/pexels-photo-432185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "July 2, 2023",
    },
    {
      name: "Office",
      img: "https://images.pexels.com/photos/303159/pexels-photo-303159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "August 24, 2022",
    },
    {
      name: "Night Life",
      img: "https://images.pexels.com/photos/1155574/pexels-photo-1155574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "January 4, 2023",
    },
    {
      name: "View",
      img: "https://images.pexels.com/photos/457937/pexels-photo-457937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "March 28, 2023",
    },
    {
      name: "Night Life",
      img: "https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "December 16, 2022",
    },
    {
      name: "Skyscrapers",
      img: "https://images.pexels.com/photos/442580/pexels-photo-442580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "November 22, 2022",
    },
  ];
  return (
    <div className=" px-20 flex flex-col gap-4">
      <h1 className="text-2xl font-titleFont font-bold dark:text-sky-100 text-sky-950">
        Files
      </h1>
      <div className="grid grid-cols-5 gap-4">
        {files.map((file) => (
          <FilePreview file={file} />
        ))}
      </div>
    </div>
  );
};
