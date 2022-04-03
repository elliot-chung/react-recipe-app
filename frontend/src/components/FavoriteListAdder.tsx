import { AxiosError } from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useAddFavoriteList from "../controllers/AddFavoriteListController";
import FavoriteList from "../sharedtypes/FavoriteList";
import StyledFavoriteListViewer from "../styles/FavoriteListViewer.style";

type FavoriteListAdderProps = {
  lists: FavoriteList[];
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
};

function FavoriteListAdder({ lists, setEditMode }: FavoriteListAdderProps) {
  const { mutate, isError, isLoading, isSuccess, error } = useAddFavoriteList();
  const inputRef = useRef<HTMLInputElement>(null);
  const [duplicateName, setDuplicateName] = useState(false);
  const handleClick = useCallback(() => {
    const listName = inputRef.current?.value;
    if (listName) {
      const nameExists = lists.some(list => list.listName === listName);
      setDuplicateName(nameExists);
      if (nameExists) return;
      mutate({ listName });
    }
  }, [lists, mutate]);

  useEffect(() => {
    if (isSuccess) {
      setEditMode(false);
    }
  }, [isSuccess, setEditMode]);

  return (
    <StyledFavoriteListViewer>
      <input type="text" ref={inputRef} />
      {duplicateName && <p>List name already exists</p>}
      {isLoading && <p>Loading...</p>}
      {isError && <p>{(error as AxiosError).message}</p>}
      <button type="button" onClick={handleClick}>
        Save
      </button>
    </StyledFavoriteListViewer>
  );
}

export default FavoriteListAdder;
