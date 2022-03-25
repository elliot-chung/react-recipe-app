import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const endpoint = import.meta.env.VITE_SPOONACULAR_RECIPE_ENDPOINT || "";
if (!endpoint) throw Error("No Endpoint for recipes provided in .env file");

async function fetchRecipe(id: number) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `${endpoint}/${id}`,
  };
  return axios(config);
}

function useRecipe() {
  let id = 0;
  let title = "";
  let imgUrl = "";
  let readyInMinutes = 0;
  let servings = 0;
  let sourceUrl = "";
  let instructions = "";

  const [favoriteState, setFavoriteState] = useState("loading");
  const [showModal, setShowModal] = useState(false);
  const { pageId } = useParams();
  const { data, isError, isSuccess } = useQuery(["recipe", pageId], () =>
    fetchRecipe(Number(pageId))
  );

  if (isSuccess) {
    id = data?.data?.id || 0;
    title = data?.data?.title || "Title Not Found";
    imgUrl = data?.data?.image || "";
    readyInMinutes = data?.data?.readyInMinutes || 0;
    servings = data?.data?.servings || 0;
    sourceUrl = data?.data?.sourceUrl || "No Source Found";
    instructions = data?.data?.instructions || "No Instructions Found";
  }

  return {
    id,
    title,
    imgUrl,
    readyInMinutes,
    servings,
    sourceUrl,
    instructions,
    isError,
    favoriteState,
    setFavoriteState,
    showModal,
    setShowModal,
  };
}

export default useRecipe;
