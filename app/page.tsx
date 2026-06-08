
import SearchSection from "@/component/SearchSection";
import TopHeadlinesArticlesSection from "@/component/TopHeadlinesArticlesSection";
import CategoriesSection from "@/component/CategoriesSection";

import { article } from "@/types/article";


export default function Home() {
  return (
    <div className="p-5">
      <TopHeadlinesArticlesSection/>
        
      <SearchSection />
      <CategoriesSection />
    </div>
  );
}
