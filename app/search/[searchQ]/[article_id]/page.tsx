import { article } from "@/types/article";
import notFoundImge from "@/public/360_F_989095613_BbuYiulrp81OPxcsQGP9sLBmUaSstTaN.jpg";
import Image from "next/image";
export default async function ArticleDetialsPage({
  params,
}: {
  params: Promise<{ article_id: string }>;
}) {
  const { article_id: articleId } = await params;
  const response = await fetch(`https://newsdata.io/api/1/latest? 
  apikey=pub_61b7fff946fc4d8a98761cd82c368365
  &id=${articleId}`);
  const articleData = ((await response.json()) as { results: article[] })
    .results[0];

  return (
    <div className="max-w-5xl mx-auto px-5 pb-5 pt-20">
      {/* Header */}
      <header>
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-base-content/40">
          {articleData.category?.[0]}
        </span>

        <h1 className="font-serif text-[clamp(1.6rem,4.5vw,2.8rem)] font-medium leading-[1.12] tracking-tight mt-4 max-w-2xl">
          {articleData.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 mt-4 text-[13px] text-base-content/60">
          <span className="font-medium text-base-content">
            {articleData.creator?.[0] || "Unknown Author"}
          </span>

          <span className="opacity-35">·</span>

          <span>{articleData.source_name}</span>

          <span className="opacity-35">·</span>

          <time dateTime={articleData.pubDate}>
            {new Date(articleData.pubDate).toLocaleDateString()}
          </time>

          <span className="opacity-35">·</span>

          <span className="flex items-center gap-1 text-[11px] text-base-content/40">
            <i className="fa-solid fa-clock"></i>
            {Math.max(
              1,
              Math.ceil(
                (articleData.description?.split(" ").length || 100) / 200,
              ),
            )}{" "}
            min read
          </span>
        </div>
      </header>

      {/* Hero */}
      <figure className="mt-7 rounded-xl overflow-hidden relative h-[clamp(200px,44vw,520px)]">
        <Image
          src={articleData.image_url ? articleData.image_url : notFoundImge}
          alt={articleData.title}
          fill
          className="object-cover"
        />

        <figcaption className="absolute bottom-0 inset-x-0 px-6 pt-10 pb-5 bg-linear-to-t from-black/55 to-transparent text-[12px] text-white/80 tracking-wide">
          {articleData.source_name} • {articleData.country?.[0]} •{" "}
          {new Date(articleData.pubDate).getFullYear()}
        </figcaption>
      </figure>

      <hr className="my-8 border-t border-base-content/10" />

      {/* Reading progress indicator */}
      <div className="h-0.5 rounded-full bg-base-content/10 mb-8">
        <div className="h-full w-[38%] bg-base-content/40 rounded-full" />
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] lg:grid-cols-[168px_1fr] gap-6 sm:gap-7 lg:gap-12 items-start">
        {/* Sidebar */}
        <aside className="pb-6 border-b border-base-content/10 sm:border-0 sm:pb-0">
          <div className="mb-7">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-base-content/40 mb-2.5">
              Keywords
            </p>

            <div className="flex flex-wrap gap-1.5">
              {articleData.keywords?.map((tag: string) => (
                <span
                  key={tag}
                  className="text-[11px] text-base-content/60 border border-base-content/20 rounded-full px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-7">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-base-content/40 mb-2.5">
              Details
            </p>

            <div className="space-y-2 text-xs text-base-content/60">
              <p>Language: {articleData.language}</p>
              <p>Country: {articleData.country?.[0]}</p>
              <p>Source: {articleData.source_name}</p>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-base-content/40 mb-2.5">
              Share
            </p>

            <div className="flex flex-col gap-1.5">
              {["Copy Link", "Facebook", "Email"].map((label) => (
                <button
                  key={label}
                  className="flex items-center gap-2 w-full border border-base-content/15 rounded-lg px-2.5 py-1.5 text-[12px] text-base-content/60 hover:bg-base-200 hover:text-base-content transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Article */}
        <article>
          <p className="font-serif italic text-[clamp(1.05rem,2.2vw,1.3rem)] leading-relaxed text-base-content/70 mb-7">
            {articleData.description}
          </p>

          <div className="space-y-5 text-[clamp(0.95rem,1.6vw,1.05rem)] leading-[1.85]">
            <p>{articleData.description}</p>

            <p>
              Published by <strong>{articleData.source_name}</strong> on{" "}
              {new Date(articleData.pubDate).toLocaleDateString()}.
            </p>

            <p>
              This article is categorized under{" "}
              {articleData.category?.join(", ")} and originates from{" "}
              {articleData.country?.[0]}.
            </p>

            <blockquote className="border-l-2 border-base-content/30 pl-5 rounded-none my-9 font-serif text-[clamp(1.15rem,2.8vw,1.6rem)] font-medium leading-[1.4]">
              "{articleData.title}"
              <cite className="block mt-2.5 text-[12px] not-italic font-sans font-normal text-base-content/40 tracking-wide">
                — {articleData.creator?.[0] || articleData.source_name}
              </cite>
            </blockquote>

            <p>
              Source URL:
              <a
                href={articleData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 underline"
              >
                Read original article
              </a>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
