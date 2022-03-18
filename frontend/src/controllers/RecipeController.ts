import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";
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
  let id = 0;
  let title = "";
  let imgUrl = "";
  let readyInMinutes = 0;
  let servings = 0;
  let instructions = "";

  const [favoriteState, setFavoriteState] = useState("loading");
  const [showModal, setShowModal] = useState(false);
  const { pageId } = useParams();
  const { data, isError, isSuccess } = useQuery(["recipe", pageId], () =>
    fetchRecipe(Number(pageId))
  );

  if (isSuccess) {
    id = data?.data?.id;
    title = data?.data?.title;
    imgUrl = data?.data?.image;
    readyInMinutes = data?.data?.readyInMinutes;
    servings = data?.data?.servings;
    instructions = data?.data?.instructions;
  }

  return {
    id,
    title,
    imgUrl,
    readyInMinutes,
    servings,
    instructions,
    isError,
    favoriteState,
    setFavoriteState,
    showModal,
    setShowModal,
  };
}

export default useRecipe;
