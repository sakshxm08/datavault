import { Menu } from "@mui/icons-material";
import React, { Fragment, useState } from "react";
import { Search } from "./Search";
import SwitchDarkMode from "./SwitchDarkMode";
import { Box, SwipeableDrawer } from "@mui/material";
import { Sidebar } from "./Sidebar";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { logo } from "../assets";

export const Header = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const sidebar = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      className="shadow-2xl dark:shadow-white"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <span
        onClick={toggleDrawer("left", false)}
        className="absolute z-10 right-4 top-4 rounded-full p-2 hover:bg-sky-200/20 duration-200 cursor-pointer"
      >
        <AiOutlineClose className="text-2xl text-white" />
      </span>
      <Sidebar />
    </Box>
  );
  return (
    <div className="z-50 fixed top-0 flex items-center h-20 w-screen justify-evenly gap-10 bg-sky-100 dark:bg-gray-800 shadow dark:shadow-lg">
      <Fragment key={"left"}>
        <Menu
          fontSize="large"
          onClick={toggleDrawer("left", true)}
          className="text-sky-950 dark:text-white ml-10 cursor-pointer"
        />
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {sidebar()}
        </SwipeableDrawer>
      </Fragment>

      <Search />
      <div className="flex gap-8 font-titleFont">
        <Link to="/">
          {/* <span className="dark:text-sky-50 dark:hover:text-sky-200 dark:hover:after:bg-sky-200 text-sky-800 hover:text-sky-950 duration-200 flex flex-col gap-1 pt-1 after:w-full after:h-[2px] after:duration-200 after:scale-x-0 hover:after:scale-x-100 after:bg-sky-950 cursor-pointer">
            DataVault
          </span> */}
          <img src={logo} className="w-12" alt="" />
        </Link>
      </div>
      <SwitchDarkMode className="mx-10 cursor-pointer" />
    </div>
  );
};
