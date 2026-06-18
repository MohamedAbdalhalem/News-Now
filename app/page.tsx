import SearchSection from "@/component/SearchSection";
import TopHeadlinesArticlesSection from "@/component/TopHeadlinesArticlesSection";
import CategoriesSection from "@/component/CategoriesSection";

export default function HomePage() {
  return (
    <div className="px-5 pb-5 pt-20">
      <TopHeadlinesArticlesSection />
      <SearchSection />
      <CategoriesSection />
    </div>
  );
}
