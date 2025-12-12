import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { article } from "../types/article";

export default function useTopHeadlines() {
   function getTopHeadlines() {
    return axios.get<{results : article[]}>('https://newsdata.io/api/1/latest?apikey=pub_61b7fff946fc4d8a98761cd82c368365')
  }
  const {data, isLoading} =  useQuery({
    queryKey: ['getTopHeadlines'],
    queryFn: getTopHeadlines,
    // refetchInterval: 60000,
  })
  console.log(data?.data.results)
    const articles = data?.data.results
    return {articles,isLoading}
}
