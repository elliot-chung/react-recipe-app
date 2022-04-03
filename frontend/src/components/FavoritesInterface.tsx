import React, { useContext } from "react";
import { AxiosError } from "axios";
import useGetFavorite from "../controllers/GetFavoritesController";
import FavoriteList from "../sharedtypes/FavoriteList";
import FavoriteListViewer from "./FavoriteListViewer";
import FavoriteListAdder from "./FavoriteListAdder";
import FavoriteContext from "../contexts/FavoriteContext";

function FavoritesInterface(): JSX.Element {
  const { addFavorite } = useContext(FavoriteContext);
  const { data, error, isError, isLoading, isSuccess } = useGetFavorite();

  return (
    <section>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{(error as AxiosError).message}</div>}
      {addFavorite && isSuccess && <FavoriteListAdder lists={data?.data} />}
      {isSuccess &&
        data?.data.map((list: FavoriteList) => (
          <FavoriteListViewer
            // eslint-disable-next-line no-underscore-dangle
            key={list._id}
            list={list}
          />
        ))}
    </section>
  );
}

export default FavoritesInterface;
