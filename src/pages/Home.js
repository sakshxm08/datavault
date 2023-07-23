import React from "react";
import { cloudImg, logo } from "../assets";
import Modal from "@mui/material/Modal";
import { Login } from "../components/Login";
import Box from "@mui/material/Box";
import { GrClose } from "react-icons/gr";

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
    bgcolor: "#ffffff",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
    outline: 0,
  };
  return (
    <div className="flex px-28 h-screen">
      <div className="flex flex-col justify-center gap-8  h-full w-1/2">
        <h5 className=" flex gap-4 items-center text-3xl font-bold font-titleFont text-sky-800">
          <img src={logo} className="rounded-full w-16 " alt="" /> DataVault
        </h5>
        <h1 className="font-titleFont font-bold text-sky-900 text-7xl leading-tight">
          All your files in one safe place
        </h1>
        <span className="text-xl text-sky-600 font-titleFont tracking-wider">
          Free file storage for everyone. Store your documents, music, images in
          your own vault.
        </span>
        {/* <Link to="/cloud"> */}
        <button
          onClick={handleOpen}
          className="w-fit px-8 py-3 bg-sky-500 hover:bg-sky-600 duration-200 rounded-lg text-white text-lg font-titleFont font-medium tracking-wider"
        >
          Start uploading
        </button>
        {/* </Link> */}
      </div>
      <div className="flex items-center h-full w-1/2 justify-center">
        <img src={cloudImg} className="w-full" alt="" />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <span
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-200 duration-200 cursor-pointer"
          >
            <GrClose className="text-2xl" />
          </span>
          <Login />
        </Box>
      </Modal>
    </div>
  );
};
