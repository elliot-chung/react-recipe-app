import React, { useMemo } from "react";
import { AxiosError } from "axios";
import useGetFavorite from "../controllers/GetFavoritesController";
import FavoriteList from "../sharedtypes/FavoriteList";
import FavoriteListViewer from "./FavoriteListViewer";

type FavoritesInterfaceProps = {};

function FavoritesInterface({}: FavoritesInterfaceProps) {
  const { data, error, isError, isLoading, isSuccess } = useGetFavorite();

  return (
    <section>
      {useMemo(() => {
        if (isLoading) {
          return <div>Loading...</div>;
        }
        if (isError) {
          return <div>{(error as AxiosError).message}</div>;
        }
        if (isSuccess) {
          return data?.data.map((list: FavoriteList) => (
            // eslint-disable-next-line no-underscore-dangle
            <FavoriteListViewer key={list._id} list={list} />
          ));
        }
        return null;
      }, [data, error, isError, isLoading, isSuccess])}
    </section>
  );
}

export default FavoritesInterface;
