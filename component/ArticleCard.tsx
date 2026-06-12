import notFoundImage from "@/public/360_F_989095613_BbuYiulrp81OPxcsQGP9sLBmUaSstTaN.jpg";
import { article } from "@/types/article";
import Image from "next/image";
import Link from "next/link";
import ReadMoreButton from "./ReadMoreButton";
export default function ArticleCard({ article }: { article: article }) {
  return (
    <Link href={`/Entertainment/${article.article_id}`} className="group h-full flex flex-col border border-black/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={article.image_url || notFoundImage}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-[0.25em] px-2 py-1 border backdrop-blur-sm">
          {article.category[0]}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h2 className="text-lg font-bold leading-tight mb-3 line-clamp-3 transition-all duration-300">
          {article.title}
        </h2>

        <p className="text-sm leading-7 line-clamp-3 mb-6">
          {article.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest">
            {new Date(article.pubDate).toLocaleDateString()}
          </span>

          <ReadMoreButton link={article.link} />
        </div>
      </div>
    </Link>
  );
}
