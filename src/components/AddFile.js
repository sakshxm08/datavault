import React from "react";

export const AddFile = ({ width, display }) => {
  return (
    <div
      //   className={`flex flex-col gap-4 rounded-2xl bg-emerald-500/90 p-4 h-fit w-40`}
      className={`mt-4 md:mt-0 shadow-inner items-center justify-center h-full gap-2 rounded-2xl text-sky-900 dark:text-sky-100 dark:hover:bg-sky-950 bg-sky-100 dark:bg-sky-900/20 hover:bg-sky-200 transition-all active:scale-95 duration-200 cursor-pointer py-8 text-4xl font-light ${width} ${display}`}
    >
      +
    </div>
  );
};
