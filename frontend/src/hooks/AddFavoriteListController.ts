import axios, { AxiosRequestConfig } from "axios";
import { useMutation } from "react-query";

const endpoint = import.meta.env.VITE_ADD_FAVORITE_LIST_ENDPOINT || "";
if (!endpoint)
  throw new Error("VITE_ADD_FAVORITE_LIST_ENDPOINT is not defined");

interface PutData {
  listName: string;
}

async function putFavoriteList(data: PutData) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    },
    data,
    url: endpoint,
  };
  return axios(config);
}

function useAddFavoriteList() {
  const output = useMutation(putFavoriteList);

  return output;
}

export default useAddFavoriteList;
