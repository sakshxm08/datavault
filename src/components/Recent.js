import { AiTwotoneCamera } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { HiDocumentDuplicate } from "react-icons/hi";
import { MdOutlineAudiotrack } from "react-icons/md";
import { RecentFile } from "./RecentFile";

export const Recent = () => {
  const recentFiles = [
    {
      name: "IMG_0000",
      type: "PNG File",
      color: "purple",
      size: "8 MB",
      icon: AiTwotoneCamera,
    },
    {
      name: "Work proposal",
      type: "PDF File",
      size: "105 kB",
      color: "emerald",
      icon: HiDocumentDuplicate,
    },
    {
      name: "Startup Pitch",
      type: "AVI File",
      size: "85 MB",
      color: "amber",
      icon: BsFillCameraVideoFill,
    },
    {
      name: "Freestyle beat",
      type: "MP3 File",
      size: "21 MB",
      color: "blue",
      icon: MdOutlineAudiotrack,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bodyFont text-2xl font-extrabold text-sky-950">
        Recent Files
      </h1>
      <div className="flex gap-4 flex-col">
        {recentFiles.map((type) => (
          <RecentFile type={type} icon={type.icon} />
        ))}
      </div>
    </div>
  );
};
