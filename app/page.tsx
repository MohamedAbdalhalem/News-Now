import SearchSection from "@/component/SearchSection";
import TopHeadlinesArticlesSection from "@/component/TopHeadlinesArticlesSection";
import CategoriesSection from "@/component/CategoriesSection";

export default function HomePage() {
  return (
    <div className="p-5">
      <TopHeadlinesArticlesSection />
      <SearchSection />
      <CategoriesSection />
    </div>
  );
}
