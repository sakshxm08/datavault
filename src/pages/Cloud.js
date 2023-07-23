import React from "react";
import { Sidebar } from "../components/Sidebar";
import { MainPage } from "../components/MainPage";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Cloud = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        <div className="flex">
          <Sidebar />
          <MainPage />
        </div>
      ) : (
        <div>Error</div>
      )}
    </>
  );
};
