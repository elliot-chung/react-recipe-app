import axios, { AxiosRequestConfig } from "axios";
import { useMutation } from "react-query";

const endpoint = import.meta.env.VITE_REMOVE_FAVORITE_LIST_ENDPOINT || "";
if (!endpoint)
  throw new Error("VITE_REMOVE_FAVORETE_LIST_ENDPOINT is not defined");

async function deleteFavoriteList(listId: string) {
  const config: AxiosRequestConfig = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    },
    url: `/${listId}`,
    baseURL: endpoint,
  };
  return axios(config);
}

function useDeleteFavoriteList() {
  const output = useMutation(deleteFavoriteList);

  return output;
}

export default useDeleteFavoriteList;
