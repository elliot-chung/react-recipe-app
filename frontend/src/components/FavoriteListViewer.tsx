import { AxiosError } from "axios";
import React, {
  useCallback,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import FavoriteContext from "../contexts/FavoriteContext";
import useRenameFavoriteList from "../controllers/RenameListController";
import FavoriteList from "../sharedtypes/FavoriteList";
import StyledFavoriteListViewer from "../styles/FavoriteListViewer.style";
import StyledRecipeCardContainer from "../styles/RecipeCardContainer.style";
import RecipeCard from "./RecipeCard";

type FavoriteListViewerProps = {
  list: FavoriteList;
};

function FavoriteListViewer({ list }: FavoriteListViewerProps) {
  const {
    listId,
    setEditMode,
    setListId,
    setSelected,
    setToDelete,
    setListToDelete,
    listMode,
    lists,
  } = useContext(FavoriteContext);
  const { mutate, isSuccess, isError, isLoading, error } =
    useRenameFavoriteList();
  // eslint-disable-next-line no-underscore-dangle
  const id = list._id;
  const editMode = listMode === "edit";
  const selectMode = listMode === "select" && id === listId;
  const { listItems, listName } = list;
  const inputRef = useRef<HTMLInputElement>(null);
  const [renameList, setRenameList] = useState(false);
  const [showListItems, setShowListItems] = useState(false);

  const handleClick = useCallback(() => {
    if (selectMode) return;
    setShowListItems(!showListItems);
  }, [selectMode, showListItems]);

  const selectFn = useCallback(
    (recipeId: number) => {
      if (editMode) {
        setSelected([recipeId]);
        setListId(id);
        return true;
      }
      if (selectMode) {
        setSelected(selected => [...selected, recipeId]);
        return true;
      }
      return false;
    },
    [editMode, id, selectMode, setListId, setSelected]
  );

  const deselectFn = useCallback(
    (recipeId: number) => {
      setSelected(selectedArr =>
        selectedArr.filter(selected => selected !== recipeId)
      );
      if (editMode) {
        setListId("");
      }
      return false;
    },
    [editMode, setListId, setSelected]
  );

  const handleInputChange = useCallback(event => {
    event.stopPropagation();
    if (inputRef.current) {
      inputRef.current.value = event.target.value;
    }
  }, []);

  const cancelRenameList = useCallback(() => {
    setRenameList(false);
  }, []);

  const handleRenameList = useCallback(
    event => {
      event.stopPropagation();
      if (!renameList) {
        setRenameList(true);
        return;
      }
      const newName = inputRef.current?.value.trim();
      const exists = lists.some(
        existingList => existingList.listName === newName
      );
      if (newName && newName !== listName && !exists) {
        mutate({ listId: id, newName });
      }
      if (newName === listName) {
        setRenameList(false);
      }
    },
    [id, listName, lists, mutate, renameList]
  );

  const handleDeleteRecipes = useCallback(
    event => {
      event.stopPropagation();
      setToDelete(true);
    },
    [setToDelete]
  );

  const handleDeleteList = useCallback(
    event => {
      event.stopPropagation();
      setListToDelete(id);
    },
    [id, setListToDelete]
  );

  const handleKeyDown = useCallback(
    event => {
      event.stopPropagation();
      if (event.key === "Enter") {
        handleRenameList(event);
      }
    },
    [handleRenameList]
  );

  useEffect((): void => {
    if (isSuccess) {
      setEditMode(false);
    }
  }, [isSuccess, setEditMode]);

  return (
    <>
      <StyledFavoriteListViewer
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        <div>
          {renameList ? (
            <input
              defaultValue={listName}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              onBlur={cancelRenameList}
              onClick={event => event.stopPropagation()}
              onKeyDown={handleKeyDown}
              onChange={handleInputChange}
              ref={inputRef}
            />
          ) : (
            <h3>{listName}</h3>
          )}
          {editMode && (
            <button
              type="button"
              onMouseDown={event => {
                event.stopPropagation();
                event.preventDefault();
              }}
              onClick={handleRenameList}
            >
              Rename
            </button>
          )}
        </div>
        {isLoading && <p>Loading...</p>}
        {isError && <p>{(error as AxiosError).message}</p>}
        {selectMode && (
          <button type="button" onClick={handleDeleteRecipes}>
            Delete Recipes
          </button>
        )}
        {editMode && (
          <button type="button" onClick={handleDeleteList}>
            Delete List
          </button>
        )}
      </StyledFavoriteListViewer>
      <StyledRecipeCardContainer>
        {showListItems &&
          listItems.map(item => (
            <RecipeCard
              id={item.recipeId}
              key={`${item.recipeId}-${id}`}
              image={item.imageUrl}
              title={item.title}
              selectFn={listMode !== "view" ? selectFn : undefined}
              deselectFn={listMode !== "view" ? deselectFn : undefined}
            />
          ))}
      </StyledRecipeCardContainer>
    </>
  );
}

export default FavoriteListViewer;
