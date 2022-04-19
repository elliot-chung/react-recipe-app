import { useQuery } from "react-query";
import axios, { AxiosRequestConfig } from "axios";
import { useMemo } from "react";

const endpoint =
  import.meta.env.VITE_SPOONACULAR_POPULAR_RECIPES_ENDPOINT || "";
if (!endpoint) throw Error("No Endpoint for logging in provided in .env file");

async function getPopularRecipes(number: number) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `${endpoint}/${number}`,
  };
  return axios(config);
}

function usePopularRecipes() {
  const { data, isError, isSuccess, isLoading } = useQuery(
    "popularRecipes",
    () => getPopularRecipes(12)
  );

  const recipes = useMemo(() => {
    if (isSuccess) return data?.data?.recipes || [];
    return [];
  }, [data?.data?.recipes, isSuccess]);

  return {
    recipes,
    isError,
    isSuccess,
    isLoading,
  };
}

export default usePopularRecipes;
