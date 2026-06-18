"use client";

import { useState } from "react";

export default function SideBar() {
  const [isShow, setIsShow] = useState(false);

  function toggleSideBarHandler() {
    setIsShow((prevState) => !prevState);
  }

  return (
    <>
      <button
        onClick={toggleSideBarHandler}
        className="btn lg:hidden btn-outline btn-sm flex items-center gap-2"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4h18M6 8h12M9 12h6"
          />
        </svg>

        <span className="font-semibold uppercase tracking-wider">Filter</span>
      </button>
      {isShow && (
        <div
          onClick={toggleSideBarHandler}
          className="fixed min-h-screen flex lg:hidden top-0 right-0 z-20 h-full w-full bg-black/40 backdrop-blur-sm"
        >
          <aside
            onClick={(e) => e.stopPropagation()}
            className=" w-[70%] md:w-[40%] ms-auto border border-base-300 rounded-l-2xl bg-base-100 p-6  space-y-8"
          >
            {/* Header */}
            <div>
              <h2 className="text-xl font-bold">Filters</h2>
              <p className="text-sm text-base-content/60 mt-1">
                Refine your news feed
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-3">Categories</h3>

              <div className="space-y-2">
                <label className="label cursor-pointer justify-start gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Technology</span>
                </label>

                <label className="label cursor-pointer justify-start gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Business</span>
                </label>

                <label className="label cursor-pointer justify-start gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Sports</span>
                </label>

                <label className="label cursor-pointer justify-start gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Health</span>
                </label>

                <label className="label cursor-pointer justify-start gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span>Entertainment</span>
                </label>
              </div>
            </div>

            {/* Date */}
            <div>
              <h3 className="font-semibold mb-3">Date</h3>

              <select className="select select-bordered w-full">
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>Any Time</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <h3 className="font-semibold mb-3">Sort By</h3>

              <select className="select select-bordered w-full">
                <option>Latest</option>
                <option>Oldest</option>
                <option>Most Popular</option>
              </select>
            </div>

            {/* Source */}
            <div>
              <h3 className="font-semibold mb-3">Source</h3>

              <input
                type="text"
                placeholder="Search source..."
                className="input input-bordered w-full"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 pt-2">
              <button className="btn btn-primary w-full">Apply Filters</button>

              <button className="btn btn-outline w-full">Reset</button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
