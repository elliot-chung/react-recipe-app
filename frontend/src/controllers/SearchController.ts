import axios, { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

interface SponacularSearchParams {
  query: string;
}

async function spoonacularSearch(
  spoonacularSearchParams: SponacularSearchParams
) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
    params: spoonacularSearchParams,
    headers: {
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": "d5e8143e99mshb9d72b1c917c629p155d7bjsneb54fc534731",
    },
  };
  return axios(config);
}

function useSearch() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const spoonacularSearchParams: SponacularSearchParams = {
    query,
  };

  const reactQueryObj = useQuery(["search", query], () =>
    spoonacularSearch(spoonacularSearchParams)
  );

  return {
    ...spoonacularSearchParams,
    ...reactQueryObj,
  };
}

export default useSearch;
