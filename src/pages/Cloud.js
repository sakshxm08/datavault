import React from "react";
// import { Sidebar } from "../components/Sidebar";
import { MainPage } from "../components/MainPage";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Header } from "../components/Header";

export const Cloud = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        <div className="">
          {/* <Sidebar /> */}
          <Header />
          <MainPage />
        </div>
      ) : (
        <div>Error</div>
      )}
    </>
  );
};
