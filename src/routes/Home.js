import React from "react";
import { cloudImg, logo } from "../assets";
import Modal from "@mui/material/Modal";
import { Login } from "../components/Login";
import Box from "@mui/material/Box";
import { AiOutlineClose } from "react-icons/ai";
import SwitchDarkMode from "../components/SwitchDarkMode";

export const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    boxShadow: 24,
    p: 0,
    outline: 0,
  };
  return (
    <div className="flex items-center justify-center px-0 md:px-10 lg:px-20 xl:px-28 h-fit py-20 min-h-screen relative">
      <div className="fixed top-4 right-0 mobile:right-4 sm:top-10 sm:right-10 z-50">
        <SwitchDarkMode />
      </div>
      <div className="z-10 px-10 md:px-0 flex flex-col justify-center gap-8 h-full w-full md:w-1/2">
        <h5 className=" flex gap-4 items-center text-3xl font-bold font-titleFont text-sky-800 dark:text-sky-100">
          <img src={logo} className="rounded-full w-16 " alt="" /> DataVault
        </h5>
        <h1 className="z-10 font-titleFont font-bold text-sky-900 text-6xl xl:text-7xl leading-tight dark:text-sky-100">
          All your files in one safe place
        </h1>
        <span className=" z-10 text-lg xl:text-xl text-sky-600 dark:text-sky-200 font-titleFont tracking-wider">
          Free file storage for everyone. Store your documents, music, images in
          your own vault.
        </span>
        {/* <Link to="/cloud"> */}
        <button
          onClick={handleOpen}
          className="w-fit px-8 py-3 z-10  bg-sky-500 dark:bg-sky-600   dark:hover:bg-sky-800 hover:bg-sky-600 duration-200 rounded-lg text-white text-lg font-titleFont font-medium tracking-wider"
        >
          Start uploading
        </button>
        {/* </Link> */}
      </div>
      <div className="absolute -top-10 opacity-20 md:opacity-100 md:relative flex items-center h-full w-full md:w-1/2 justify-center">
        <img
          src={cloudImg}
          className="w-full drop-shadow-xl dark:drop-shadow-xl shadow-sky-50"
          alt=""
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-transparent rounded-2xl">
          <div className="px-4 py-10 bg-white dark:bg-gray-800 rounded-2xl">
            <span
              onClick={handleClose}
              className="absolute  right-4 top-4 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-600 duration-200 cursor-pointer"
            >
              <AiOutlineClose className="text-2xl dark:text-white" />
            </span>
            <Login />
          </div>
        </Box>
      </Modal>
    </div>
  );
};
