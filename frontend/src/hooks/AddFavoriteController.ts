import axios, { AxiosRequestConfig } from "axios";
import { useMutation } from "react-query";
import ListItem from "../sharedtypes/ListItem";

const endpoint = import.meta.env.VITE_ADD_FAVORITE_ENDPOINT || "";
if (!endpoint) throw new Error("VITE_ADD_FAVORITE_ENDPOINT is not defined");

interface PutData {
  recipe: ListItem;
  listIds: string[];
  listNames: string[];
}

async function putFavorite(data: PutData) {
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

function useAddFavorite() {
  const output = useMutation(putFavorite);

  return output;
}

export default useAddFavorite;
