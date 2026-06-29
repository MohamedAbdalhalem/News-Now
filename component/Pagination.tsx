"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function Pagination({ pageId }: { pageId: string | null }) {
  // use useRouter to push query params in the url
  const router = useRouter();

  // use search params to know if there's page param
  const params = useSearchParams();
  const page = params.get("page");

  // define a function to go the next page or the previous
  function changePageHandler() {
    // define the url thaht i used in router
    let url: string | string[] = window.location.href;

    // check if the there an old page param and delete it form the url
    if (url.includes("?page")) {
      url = window.location.href.split("?");
      url = url.slice(0, url.length - 1);
    }
    // chech if theres new pageID form the api and push it to the url
    if (pageId) {
      router.push(`${url}?page=${pageId}`);
    }
  }

  // define a function to go to the previous page
  function backPageHandler() {
    router.back();
  }
  return (
    <div className="join  grid grid-cols-2 md:w-100 mx-auto ">
      {/* the previous page button  */}
      <button
        className="join-item btn btn-outline rounded-s-3xl"
        // disabled the previous button if there's no page param in the url
        disabled={!page}
        onClick={backPageHandler}
      >
        Previous
      </button>

      {/* the next page button  */}
      <button
        className="join-item btn btn-outline rounded-e-3xl"
        // disabled the next button if there's no pageId comes form the api
        disabled={!pageId}
        onClick={changePageHandler}
      >
        Next
      </button>
    </div>
  );
}
