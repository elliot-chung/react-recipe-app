import React, { useMemo } from "react";
import { AxiosError } from "axios";
import useGetFavorite from "../controllers/GetFavoritesController";
import FavoriteList from "../sharedtypes/FavoriteList";
import FavoriteListViewer from "./FavoriteListViewer";

type FavoritesInterfaceProps = {
  listId: string;
  setListId: React.Dispatch<React.SetStateAction<string>>;
  setSelected: React.Dispatch<React.SetStateAction<number[]>>;
  setToDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setListToDelete: React.Dispatch<React.SetStateAction<string>>;
  listMode: string;
};

function FavoritesInterface({
  listId,
  setListId,
  setSelected,
  setToDelete,
  setListToDelete,
  listMode,
}: FavoritesInterfaceProps) {
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
            <FavoriteListViewer
              // eslint-disable-next-line no-underscore-dangle
              key={list._id}
              list={list}
              listId={listId}
              setListId={setListId}
              setSelected={setSelected}
              setToDelete={setToDelete}
              setListToDelete={setListToDelete}
              listMode={listMode}
            />
          ));
        }
        return null;
      }, [
        data?.data,
        error,
        isError,
        isLoading,
        isSuccess,
        listId,
        listMode,
        setListId,
        setListToDelete,
        setSelected,
        setToDelete,
      ])}
    </section>
  );
}

export default FavoritesInterface;
