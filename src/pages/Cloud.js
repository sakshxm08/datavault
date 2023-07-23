import React from "react";
import { Sidebar } from "../components/Sidebar";
import { MainPage } from "../components/MainPage";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Cloud = () => {
  const [user, loader] = useAuthState(auth);
  const navigate = useNavigate();
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
