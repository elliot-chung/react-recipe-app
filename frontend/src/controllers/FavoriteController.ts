import { AxiosError } from "axios";
import { useEffect, useMemo, useState } from "react";
import FavoriteList from "../sharedtypes/FavoriteList";
import useGetFavorite from "./GetFavoritesController";

function useFavorite() {
  const [editMode, setEditMode] = useState(false);
  const { data, error, isError, isLoading, isSuccess } = useGetFavorite(
    !editMode
  );

  const [lists, setLists] = useState<FavoriteList[]>([]);

  const [listId, setListId] = useState("");
  const [selected, setSelected] = useState<number[]>([]);

  const [toDelete, setToDelete] = useState(false);
  const [listToDelete, setListToDelete] = useState("");
  const [addFavorite, setAddFavorite] = useState(false);

  const [interfaceKey, setInterfaceKey] = useState(Date.now());

  const listMode = useMemo(() => {
    if (editMode && selected.length === 0) return "edit";
    if (editMode && selected.length > 0) return "select";
    return "view";
  }, [editMode, selected]);

  useEffect(() => {
    if (!editMode) {
      setListId("");
      setSelected([]);
      setToDelete(false);
      setListToDelete("");
      setAddFavorite(false);
      setInterfaceKey(Date.now());
    }
    if (isSuccess) {
      setLists(data?.data);
    }
  }, [data?.data, editMode, isSuccess]);

  return {
    editMode,
    setEditMode,
    listId,
    setListId,
    selected,
    setSelected,
    toDelete,
    setToDelete,
    listToDelete,
    setListToDelete,
    addFavorite,
    setAddFavorite,
    listMode,
    interfaceKey,
    isSuccess,
    isLoading,
    isError,
    error: error as AxiosError,
    lists,
  };
}

export default useFavorite;
