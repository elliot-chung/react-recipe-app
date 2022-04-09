import { AxiosError } from "axios";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import FavoriteContext from "../contexts/FavoriteContext";
import useAddFavoriteList from "../controllers/AddFavoriteListController";
import StyledButton from "../styles/Button.style";
import StyledFavoriteListViewer from "../styles/FavoriteListViewer.style";
import StyledInput from "../styles/Input.style";

function FavoriteListAdder(): JSX.Element {
  const { setAddFavorite, setEditMode, lists } = useContext(FavoriteContext);
  const { mutate, isError, isLoading, isSuccess, error } = useAddFavoriteList();
  const inputRef = useRef<HTMLInputElement>(null);
  const [duplicateName, setDuplicateName] = useState(false);
  const handleSave = useCallback(() => {
    const listName = inputRef.current?.value.trim();
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
      <StyledInput
        type="text"
        ref={inputRef}
        onBlur={handleCancel}
        onKeyDown={handleKeyDown}
      />
      {duplicateName && <p>List name already exists</p>}
      {isLoading && <p>Loading...</p>}
      {isError && <p>{(error as AxiosError).message}</p>}
      <StyledButton
        type="button"
        onClick={handleSave}
        onMouseDown={event => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        Save
      </StyledButton>
    </StyledFavoriteListViewer>
  );
}

export default FavoriteListAdder;
