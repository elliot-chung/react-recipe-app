import React from "react";
import { AxiosError } from "axios";
import useGetFavorite from "../controllers/GetFavoritesController";
import FavoriteList from "../sharedtypes/FavoriteList";
import FavoriteListViewer from "./FavoriteListViewer";
import FavoriteListAdder from "./FavoriteListAdder";

type FavoritesInterfaceProps = {
  listId: string;
  addFavorite: boolean;
  setAddFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  setListId: React.Dispatch<React.SetStateAction<string>>;
  setSelected: React.Dispatch<React.SetStateAction<number[]>>;
  setToDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setListToDelete: React.Dispatch<React.SetStateAction<string>>;
  listMode: string;
};

function FavoritesInterface({
  listId,
  addFavorite,
  setAddFavorite,
  setEditMode,
  setListId,
  setSelected,
  setToDelete,
  setListToDelete,
  listMode,
}: FavoritesInterfaceProps) {
  const { data, error, isError, isLoading, isSuccess } = useGetFavorite();

  return (
    <section>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{(error as AxiosError).message}</div>}
      {addFavorite && isSuccess && (
        <FavoriteListAdder
          setEditMode={setEditMode}
          setAddFavorite={setAddFavorite}
          lists={data?.data}
        />
      )}
      {isSuccess &&
        data?.data.map((list: FavoriteList) => (
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
        ))}
    </section>
  );
}

export default FavoritesInterface;
