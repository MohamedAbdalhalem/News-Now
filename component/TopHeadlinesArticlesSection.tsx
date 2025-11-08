"use client"
import useTopHeadlines from "../hooks/useTopHeadlines"
import Slider from "react-slick";
import TopHeadlinesItem from "../component/TopHeadlinesItem";
export default function TopHeadlinesArticlesSection() {
  const { articles, isLoading } = useTopHeadlines()
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    fade: true,
  };
  if (isLoading) {
    return <div className="flex w-full flex-col  gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-full mb-2"></div>
  <div className="skeleton h-4 w-full"></div>
</div> 
  }
  return (
    <div>
    <Slider {...settings}>
      {articles?.slice(0,5)?.map((article) => <TopHeadlinesItem articleData={article}/>)}
      </Slider>
    </div>
  );
}
