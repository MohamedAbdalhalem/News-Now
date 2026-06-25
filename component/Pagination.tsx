"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({
  pageId,
  category,
}: {
  pageId: string | null;
  category: string;
}) {
  const router = useRouter();
  const page = useSearchParams().get("page");
  function changePageHandler() {
    router.push(`/${category}?page=${pageId}`);
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
