import { article } from "../types/article";
import notFoundImage from "../public/360_F_989095613_BbuYiulrp81OPxcsQGP9sLBmUaSstTaN.jpg";
import Image from "next/image";

export default function TopHeadlinesItem({
  articleData,
}: {
  articleData: article;
}) {
  return (
    <div>
      <div className="relative w-full h-90 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* TopHeadlinesItem image  */}
        <Image
          src={articleData.image_url ? articleData.image_url : notFoundImage}
          alt={articleData.title}
          fill
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>

        <div className="absolute bottom-0 p-4 text-white w-full">
          <span className="badge badge-info mb-2">Trending</span>
          {/* TopHeadlinesItem title  */}
          <h2 className="text-lg font-bold line-clamp-2">
            {articleData.title}
          </h2>

          {/* TopHeadlinesItem description  */}
          <p className="text-sm text-gray-300 line-clamp-2 mt-1">
            {articleData.description}
          </p>

          <div className="flex justify-between items-center mt-3 text-xs">
            {/* TopHeadlinesItem puplish data */}
            <span>{new Date(articleData.pubDate).toLocaleDateString()}</span>

            {/* link for read more  */}
            <a
              href={articleData.link}
              target="_blank"
              className="btn btn-sm btn-outline btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
