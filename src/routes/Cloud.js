import React from "react";
// import { Sidebar } from "../components/Sidebar";
// import { MainPage } from "../components/MainPage";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const Cloud = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        <div className="">
          {/* <Sidebar /> */}
          <Header />
          <Outlet />
          {/* <MainPage /> */}
        </div>
      ) : (
        <div>Error</div>
      )}
    </>
  );
};
