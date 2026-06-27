"use client";

import { ChangeEvent, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function SideBar({ category }: { category: string }) {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();
  function toggleSideBarHandler() {
    setIsShow((prevState) => !prevState);
  }

  function handleTimeZone(e: ChangeEvent<HTMLSelectElement>) {
    Cookies.set("timezone", e.target.value, { expires: 7 });
  }

  function handleFilteration() {
    router.push(`/${category}`);
    toggleSideBarHandler();
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
          className="fixed  min-h-screen flex lg:hidden top-0 right-0 z-20 h-full w-full bg-black/40 backdrop-blur-sm"
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

            {/* Date */}
            <div>
              <h3 className="font-semibold mb-3">Time Zone</h3>

              <select
                onChange={handleTimeZone}
                className="select select-bordered w-full"
                defaultValue={Cookies.get("timezone")}
              >
                <option value="">Select A Time Zone</option>
                <option value="africa/algiers">Africa/Algiers</option>
                <option value="africa/cairo">Africa/Cairo</option>
                <option value="africa/casablanca">Africa/Casablanca</option>
                <option value="africa/harare"> Africa/Harare</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <h3 className="font-semibold mb-3">Domain Priority</h3>

              <select className="select select-bordered w-full">
                <option>Top</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            {/* Source */}

            {/* Actions */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={handleFilteration}
                className="btn btn-primary w-full"
              >
                Apply Filters
              </button>

              <button
                onClick={toggleSideBarHandler}
                className="btn btn-outline w-full"
              >
                close
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
