import { AxiosError } from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useAddFavoriteList from "../controllers/AddFavoriteListController";
import FavoriteList from "../sharedtypes/FavoriteList";
import StyledFavoriteListViewer from "../styles/FavoriteListViewer.style";

type FavoriteListAdderProps = {
  lists: FavoriteList[];
  setAddFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
};

function FavoriteListAdder({
  lists,
  setAddFavorite,
  setEditMode,
}: FavoriteListAdderProps) {
  const { mutate, isError, isLoading, isSuccess, error } = useAddFavoriteList();
  const inputRef = useRef<HTMLInputElement>(null);
  const [duplicateName, setDuplicateName] = useState(false);
  const handleSave = useCallback(() => {
    const listName = inputRef.current?.value;
    if (listName) {
      const nameExists = lists.some(list => list.listName === listName);
      setDuplicateName(nameExists);
      if (nameExists) return;
      mutate({ listName });
    }
  }, [lists, mutate]);

  const handleCancel = useCallback(() => {
    setAddFavorite(false);
  }, [setAddFavorite]);

  const handleKeyDown = useCallback(
    event => {
      if (event.key === "Enter") {
        handleSave();
      }
    },
    [handleSave]
  );

  useEffect(() => {
    if (isSuccess) {
      setEditMode(false);
    }
  }, [isSuccess, setEditMode]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <StyledFavoriteListViewer>
      <input
        type="text"
        ref={inputRef}
        onBlur={handleCancel}
        onKeyDown={handleKeyDown}
      />
      {duplicateName && <p>List name already exists</p>}
      {isLoading && <p>Loading...</p>}
      {isError && <p>{(error as AxiosError).message}</p>}
      <button type="button" onClick={handleSave}>
        Save
      </button>
    </StyledFavoriteListViewer>
  );
}

export default FavoriteListAdder;
