"use client";

import { useState } from "react";
export default function CreatePoll() {
  return (
    <div className="  mt-4  ">
      <section className="w-2/3 h-full bg-[#1a1a2e] p-6 rounded-lg border border-[#00ff85] min-w-full">
        <h2 className="text-lg font-semibold text-[#00ff85] mb-4">New Poll</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="enter name of candidate 1"
            className="w-full px-4 py-3 bg-[#010014] text-white border border-[#00ff85]  rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="enter name of candidate 2"
            className="w-full px-4 py-3 bg-[#010014] text-white border border-[#00ff85] rounded-md focus:outline-none"
          />

          <div className="flex flex-col  md:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder="Location or Institution where the election is goin on"
              className="flex-1 px-4 py-3 bg-[#010014] text-white border border-[#00ff85] rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Position being contested in the election."
              className="flex-1 px-4 py-3 bg-[#010014] text-white border border-[#00ff85] rounded-md focus:outline-none"
            />
          </div>

          <div className="flex gap-4">
            <textarea
              type="time"
              placeholder="Purpose of the election "
              className="w-full px-4 py-3 bg-[#010014] text-white border border-[#00ff85] rounded-md focus:outline-none"
              cols={30}
            />
          </div>

          <button className="w-full py-3 mt-4 bg-[#00ff85] text-black rounded-md hover:bg-[#00e074]">
            Create Poll
          </button>
        </div>
      </section>
    </div>
  );
}
