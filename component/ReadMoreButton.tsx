"use client";

import { MouseEvent } from "react";

// make a client button component to read more about the article that it has
export default function ReadMoreButton({ link }: { link: string }) {
  function readMoreHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    window.open(link);
  }
  return (
    <button
      onClick={readMoreHandler}
      className="flex items-end gap-1 text-sm font-medium cursor-pointer"
    >
      Read
      <i className="fa-solid fa-arrow-right text-sm mb-0.5 block"></i>
    </button>
  );
}
