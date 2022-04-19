import axios, { AxiosRequestConfig } from "axios";
import { useMutation } from "react-query";

const endpoint = import.meta.env.VITE_RENAME_FAVORITE_LIST_ENDPOINT || "";
if (!endpoint)
  throw new Error("VITE_RENAME_FAVORITE_LIST_ENDPOINT is not defined");

interface PutData {
  listId: string;
  newName: string;
}

async function putFavoriteList(data: PutData) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    },
    data: { newName: data.newName },
    url: `/${data.listId}`,
    baseURL: endpoint,
  };
  return axios(config);
}

function useRenameFavoriteList() {
  const output = useMutation(putFavoriteList);

  return output;
}

export default useRenameFavoriteList;
