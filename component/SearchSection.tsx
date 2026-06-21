"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function SearchSection() {
  const [searchQ, setSearchQ] = useState<undefined | string>(undefined);
  const router = useRouter();
  const changeSearchQ = function (event: ChangeEvent<HTMLInputElement>) {
    setSearchQ(event.target.value);
  };
  return (
    <section className="w-full bg-base-100 py-12">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Search for News</h2>
        <p className="text-gray-500 mb-8">
          Find the latest articles and top stories by entering your keywords
          below.
        </p>

        <div className="flex items-center bg-base-200 rounded-full shadow-md overflow-hidden focus-within:ring-2 focus-within:ring-primary transition-all duration-300">
          <input
            type="search"
            onChange={changeSearchQ}
            placeholder="Search news..."
            className="flex-1 px-6 py-3 bg-transparent outline-none text-base"
          />
          <button
            disabled={!Boolean(searchQ)}
            onClick={() => router.push(`/search/${searchQ}`)}
            className="btn btn-primary rounded-l-none rounded-r-2xl border-none py-6 px-6"
          >
            <span className="hidden sm:inline">Search</span>
            <i className="fa-solid fa-arrow-right sm:hidden"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
