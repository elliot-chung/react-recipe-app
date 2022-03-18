import axios, { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

async function fetchRecipe(id: number) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
    headers: {
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": "d5e8143e99mshb9d72b1c917c629p155d7bjsneb54fc534731",
    },
  };
  return axios(config);
}

function useRecipe() {
  const { id } = useParams();
  const reactQueryObj = useQuery(["recipe", id], () => fetchRecipe(Number(id)));

  return reactQueryObj;
}

export default useRecipe;
