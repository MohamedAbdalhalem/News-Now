import { Suspense } from "react";
import TopHeadlinesItem from "./TopHeadlinesItem";
import { article } from "@/types/article";
import ClientRefresher from "./ClientRefresher";

async function Articles() {
  const response = await fetch(
    "https://newsdata.io/api/1/latest?apikey=pub_781cf392275245829f11a3d763ba2992",
  );

  const data = (await response.json()) as { results: article[] };
  console.log(data.results);
  return (
    <div className="space-y-6">
  {/* Hero News */}
  <div className="overflow-hidden rounded-3xl">
    <TopHeadlinesItem
      articleData={data.results[0]}
      
    />
  </div>

  {/* Other News */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
    {data.results.slice(1, 3).map((article: article) => (
      <TopHeadlinesItem
        key={article.article_id}
        articleData={article}
      />
    ))}
  </div>
</div>
  );
}

export default function TopHeadlinesArticlesSection() {
  return (
    <div>
      <ClientRefresher/>
      <Suspense
        fallback={
          <div className="flex w-full flex-col  gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-full mb-2"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        }
      >
        <Articles />
      </Suspense>
    </div>
  );
}
