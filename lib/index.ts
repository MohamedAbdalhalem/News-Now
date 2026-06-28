"use server";
import { article } from "@/types/article";
export async function getArticlesOfCategory(
  category: string,
  page: undefined | string,
  timeZone: string | undefined,
) {
  const params = new URLSearchParams({
    category,
    size: "6",
  });
  const pageParam = page ? `&page=${page}` : "";
  const timeZoneParam = timeZone ? `&timezone=${timeZone}` : "";
  const url = `https://newsdata.io/api/1/latest?apikey=pub_61b7fff946fc4d8a98761cd82c368365${pageParam}&${timeZoneParam}&${params}`;
  const response = await fetch(url);
  const { results: articles, nextPage } = (await response.json()) as {
    results: article[];
    nextPage: string;
  };
  return {
    articles,
    nextPage,
  };
}
