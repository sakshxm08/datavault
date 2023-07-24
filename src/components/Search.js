import React from "react";

export const Search = () => {
  return (
    <>
      <div class="w-full max-w-3xl mx-auto ">
        <div class="relative dark:bg-gray-700 flex items-center w-full h-10 rounded-full focus-within:shadow-lg bg-white overflow-hidden">
          <div class="grid place-items-center h-full w-12 text-gray-300 dark:text-sky-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            class="peer dark:bg-gray-700  h-full w-full outline-none text-sm text-gray-700 dark:text-sky-50 pr-2"
            type="text"
            id="search"
            placeholder="Search"
          />
        </div>
      </div>
    </>
  );
};
