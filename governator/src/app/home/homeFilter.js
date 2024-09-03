"use client";

import { IoMdArrowDropdown } from "react-icons/io";
// import { useState } from "react";

export function HomeFilter() {
  // const [state, useState] = useState(false);
  return (
    <section className=" flex items-center  w-full justify-between ">
      <article className=" border py-2 px-2 w-2/3 rounded-lg">
        <div className=" flex items-center justify-between">
          <p className="border px-1 inline-flex gap-1 rounded-md">
            <small className=" text-[#fefefe]">
              sort by:
              <span className="text-green-400">{`Trending Votes`}</span>
            </small>
            <IoMdArrowDropdown className="text-xl " />
          </p>
          <p>
            <small className=" text-[#fefefe]">
              Ongoing Voting: <span className="text-green-400">{`24`}</span>
            </small>
          </p>
        </div>
      </article>
      <button className="btn btn-success text-white px-[2.5rem]">
        {" "}
        create poll{" "}
      </button>
    </section>
  );
}
