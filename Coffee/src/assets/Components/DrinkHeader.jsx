import React from "react";

const DrinkHeader = () => {
  return (
    <>
      <div className="p-4 text-[#834D1E]">
        <h2 className="text-xl font-bold">
          What would you <br /> like to drink today?
        </h2>
      </div>
      <div class="w-[90%] max-w-md mx-auto mb-6">
        <div class="relative flex items-center w-full h-8 rounded-lg focus-within:shadow-lg overflow-hidden bg-[#FCF2D9] border border-[#834D1E]">
          <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#834D1E"
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
            class="peer h-full w-full outline-none text-sm bg-[#FCF2D9] text-[#834D1E] placeholder-[#834D1E] pr-2 border-none"
            type="text"
            id="search"
            placeholder="Search.."
          />
        </div>
      </div>
    </>
  );
};

export default DrinkHeader;
