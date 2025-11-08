import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { article } from "@/types/article";

export default function useTopHeadlines() {
   function getTopHeadlines() {
    return axios.get<{articles : article[]}>('https://gnews.io/api/v4/top-headlines?category=general&apikey=3e1df27a4c76b0718c238ed535b66e7f')
  }
  const {data, isLoading} =  useQuery({
    queryKey: ['getTopHeadlines'],
    queryFn: getTopHeadlines,
  })
    const articles = data?.data.articles
    return {articles,isLoading}
}
