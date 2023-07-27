import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { BiExpand } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { Tooltip } from "@mui/material";
export const ImagePreview = ({ item, deleteFile, opacity }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "transaparent",

    p: 0,
  };
  const [preview, setPreview] = useState(false);

  const handleOpenPre = () => setPreview(true);
  const handleClosePre = () => setPreview(false);
  return (
    <div className={`opacity-${opacity} `}>
      <div className="shadow-sm border h-20 flex  items-center  rounded-lg overflow-hidden  dark:border-gray-500 dark:text-sky-50">
        <span className="h-full border-r dark:border-gray-500 aspect-square">
          <img
            src={item.imgURL}
            alt=""
            className=" object-contain h-full aspect-square"
          />
        </span>
        <div className="flex justify-between items-center w-full pr-4">
          <div className="text-xs py-1  overflow-hidden text-ellipsis whitespace-nowrap w-32 mobile:w-48 sm:w-64 md:w-80 lg:w-52 xl:w-64 px-4">
            <span className="text-center overflow-hidden text-ellipsis  whitespace-nowrap">
              {item.name}
            </span>
          </div>
          <div className="flex gap-4 xl:gap-8 items-center">
            <Tooltip title="Expand">
              <span
                onClick={handleOpenPre}
                className=" text-lg duration-200 hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer p-2 rounded-full"
              >
                <BiExpand />
              </span>
            </Tooltip>
            <Tooltip title="Delete">
              <span
                onClick={deleteFile}
                className="text-xl duration-200 hover:bg-red-200 dark:hover:bg-red-500/50 cursor-pointer p-2 rounded-full"
              >
                <MdOutlineDelete />
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
      {/* <button onClick={handleOpenPre}>Open modal</button> */}
      <Modal
        open={preview}
        onClose={handleClosePre}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="bg-white dark:bg-sky-900 p-4 rounded-xl shadow-xl">
            <div className="w-full aspect-video flex items-center justify-center bg-gray-200 dark:bg-sky-950 rounded-xl">
              <img src={item.imgURL} className="object-contain h-full" alt="" />
            </div>
            <div className="flex justify-between items-center text-xl font-bodyFont font-medium pt-4">
              <div className="dark:text-sky-50">{item.name}</div>
              <button
                onClick={handleClosePre}
                className="bg-sky-700 text-sky-50 dark:bg-sky-400 dark:hover:bg-sky-500 dark:text-sky-950 px-8 py-2 rounded-xl text-base flex items-center justify-center hover:bg-sky-800 duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
