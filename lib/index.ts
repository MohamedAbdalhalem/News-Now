"use server";
import { article } from "@/types/article";

// define a async function to fetch article by category
export async function getArticlesOfCategory(
  category: string,
  page: undefined | string,
  timeZone: string | undefined,
) {
  // use URLSearchParams class to put the ensured params to url
  const params = new URLSearchParams({
    category,
    size: "6",
  });

  // define the variable to hold the unsured params
  const pageParam = page ? `&page=${page}` : "";
  const timeZoneParam = timeZone ? `&timezone=${timeZone}` : "";

  // define a url variable using template letiers
  const url = `https://newsdata.io/api/1/latest?apikey=pub_61b7fff946fc4d8a98761cd82c368365${pageParam}&${timeZoneParam}&${params}`;

  // use fetch ot handle get request
  const response = await fetch(url);

  // destruct  the results as articles and the next page form the response
  const { results: articles, nextPage } = (await response.json()) as {
    results: article[];
    nextPage: string;
  };

  return {
    articles,
    nextPage,
  };
}
