import React from "react";
import { Sidebar } from "../components/Sidebar";
import { MainPage } from "../components/MainPage";

export const Cloud = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <MainPage />
      </div>
    </>
  );
};
