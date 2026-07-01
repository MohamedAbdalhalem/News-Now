import ArticleCard from "@/component/ArticleCard";
import ArticlesSkeleton from "@/component/ArticlesSkeleton";
import Pagination from "@/component/Pagination";
import { article } from "@/types/article";
import { Suspense } from "react";
async function Articles({
  searchQ,
  page,
}: {
  searchQ: string;
  page: string | undefined;
}) {
  const url = `https://newsdata.io/api/1/latest? 
  apikey=pub_781cf392275245829f11a3d763ba2992
  &q=${searchQ} ${page ? `&page=${page}` : ""}`;
  const response = await fetch(url);
  const { results: articles, nextPage } = (await response.json()) as {
    results: article[];
    nextPage: string;
  };

  return (
    <>
      <div className="grid  md:grid-cols-2 xl:grid-cols-3  gap-5 mb-8">
        {!articles?.length && <p>No articles found.</p>}
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </div>

      <Pagination pageId={nextPage} />
    </>
  );
}

export default async function Searchage({
  params,
  searchParams,
}: {
  params: Promise<{ searchQ: string }>;
  searchParams: Promise<{ page: string }>;
}) {
  const { searchQ } = await params;
  const { page } = await searchParams;
  return (
    <main className="flex font-sans px-5 pt-16">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 min-w-64 flex-col border-r px-6 py-8">
        <div className="pb-6 border-b">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-2">
            Filters
          </h3>
          <p className="text-xs">Refine your news feed</p>
        </div>

        <div className="py-6 border-b">
          <label className="block text-xs font-semibold uppercase tracking-wider mb-3">
            Keywords
          </label>

          <input
            type="text"
            placeholder="Search topics..."
            className="w-full border-b py-2 text-sm focus:outline-none"
          />
        </div>

        <div className="py-6 border-b">
          <label className="block text-xs font-semibold uppercase tracking-wider mb-3">
            Region
          </label>

          <button className="w-full flex items-center justify-between py-2 text-sm">
            <span>All Regions</span>

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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <div className="py-6 border-b">
          <label className="block text-xs font-semibold uppercase tracking-wider mb-4">
            Categories
          </label>

          <div className="flex flex-col gap-3">
            <button className="text-left text-sm hover:translate-x-1 transition-transform">
              Latest News
            </button>

            <button className="text-left text-sm hover:translate-x-1 transition-transform">
              Breaking
            </button>

            <button className="text-left text-sm hover:translate-x-1 transition-transform">
              Analysis
            </button>

            <button className="text-left text-sm hover:translate-x-1 transition-transform">
              Interviews
            </button>
          </div>
        </div>

        <div className="py-6">
          <label className="block text-xs font-semibold uppercase tracking-wider mb-4">
            AI Sentiment
          </label>

          <input
            type="range"
            min={0}
            max={100}
            defaultValue={0}
            className="w-full"
          />

          <div className="flex justify-between text-xs mt-2">
            <span>Negative</span>
            <span>Neutral</span>
            <span>Positive</span>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 py-8 px-5 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 gap-5 ">
          <div className="w-[70%]">
            <p className="text-sm  mt-0.5">
              Exploring the latest news, trends, and developments across a wide
              range of topics.
            </p>
          </div>
        </div>
        <Suspense key={page} fallback={<ArticlesSkeleton />}>
          <Articles searchQ={searchQ} page={page} />
        </Suspense>
        {/* Grid */}
      </main>
    </main>
  );
}
