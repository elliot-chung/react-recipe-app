import axios, { AxiosRequestConfig } from "axios";
import { useMutation } from "react-query";

const endpoint = import.meta.env.VITE_REMOVE_FAVORITE_ENDPOINT || "";
if (!endpoint) throw new Error("VITE_REMOVE_FAVORITE_ENDPOINT is not defined");

interface DeleteData {
  listId: string;
  idsToDelete: [number];
}

async function deleteFavorite(data: DeleteData) {
  const config: AxiosRequestConfig = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    },
    data,
    url: endpoint,
  };
  return axios(config);
}

function useDeleteFavorite() {
  const output = useMutation(deleteFavorite);

  return output;
}

export default useDeleteFavorite;
