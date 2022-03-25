import axios, { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

interface SpoonacularSearchParams {
  query: string;
}

async function spoonacularSearch(
  spoonacularSearchParams: SpoonacularSearchParams
) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "http://localhost:5000/spoonacular/search",
    params: spoonacularSearchParams,
  };
  return axios(config);
}

function useSearch() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const spoonacularSearchParams: SpoonacularSearchParams = {
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
