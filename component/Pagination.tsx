"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function Pagination({ pageId }: { pageId: string | null }) {
  const router = useRouter();
  const params = useSearchParams();
  const page = params.get("page");

  function changePageHandler() {
    let url: string | string[] = window.location.href;
    if (url.includes("?page")) {
      url = window.location.href.split("?");
      url = url.slice(0, url.length - 1);
    }
    if (pageId) {
      router.push(`${url}?page=${pageId}`);
    }
  }

  function backPageHandler() {
    router.back();
  }
  return (
    <div className="join  grid grid-cols-2 md:w-100 mx-auto ">
      <button
        className="join-item btn btn-outline rounded-s-3xl"
        disabled={!page}
        onClick={backPageHandler}
      >
        Previous
      </button>
      <button
        className="join-item btn btn-outline rounded-e-3xl"
        disabled={!pageId}
        onClick={changePageHandler}
      >
        Next
      </button>
    </div>
  );
}
