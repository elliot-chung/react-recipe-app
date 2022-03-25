import axios, { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

interface SpoonacularSearchParams {
  query: string;
}

const endpoint = import.meta.env.VITE_SPOONACULAR_SEARCH_ENDPOINT || "";
if (!endpoint) throw Error("No Endpoint for searching provided in .env file");

async function spoonacularSearch(
  spoonacularSearchParams: SpoonacularSearchParams
) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: endpoint,
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
