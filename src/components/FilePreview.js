import { Box, Modal } from "@mui/material";
import React, { useState } from "react";

export const FilePreview = ({ file }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "transaparent",

    p: 0,
  };
  const [preview, setPreview] = useState(false);

  const handleOpenPre = () => setPreview(true);
  const handleClosePre = () => setPreview(false);
  return (
    <>
      <div
        onClick={handleOpenPre}
        className="bg-white  group dark:bg-sky-800 hover:bg-gray-200 dark:hover:bg-sky-900 active:scale-95 duration-200 cursor-pointer rounded-lg shadow-md h-fit w-full p-3 flex flex-col gap-2 "
      >
        <div className="overflow-hidden rounded">
          <img
            src={file.img}
            className="w-full object-cover aspect-video origin-top rounded group-hover:scale-110 duration-200"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-sky-900 dark:text-sky-100 font-bodyFont font-semibold text-sm ">
            {file.name}
          </h2>
          <h6 className="text-sky-400 font-bodyFont text-xs">{file.date}</h6>
        </div>
      </div>
      <Modal
        open={preview}
        onClose={handleClosePre}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="bg-white dark:bg-sky-900 p-4 rounded-xl shadow-xl">
            <div className="w-full aspect-video flex items-center justify-center bg-gray-200 dark:bg-sky-950 rounded-xl overflow-hidden">
              <img src={file.img} className="object-contain h-full " alt="" />
            </div>
            <div className="flex justify-between items-center text-xl font-bodyFont font-medium pt-4">
              <div className="text-sm text-gray-500 dark:text-gray-200">
                {file.date}
              </div>
              <div className="dark:text-sky-50">{file.name}</div>
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
    </>
  );
};
