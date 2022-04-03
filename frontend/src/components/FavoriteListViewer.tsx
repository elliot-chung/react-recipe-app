import React, { useCallback, useState, useContext } from "react";
import FavoriteContext from "../contexts/FavoriteContext";
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
    setListId,
    setSelected,
    setToDelete,
    setListToDelete,
    listMode,
  } = useContext(FavoriteContext);
  // eslint-disable-next-line no-underscore-dangle
  const id = list._id;
  const editMode = listMode === "edit";
  const selectMode = listMode === "select" && id === listId;
  const { listItems, listName } = list;
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

  return (
    <>
      <StyledFavoriteListViewer
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        <div>
          <h3>{listName}</h3>
          {editMode && <button type="button">Rename</button>}
        </div>
        {selectMode && (
          <button
            type="button"
            onClick={event => {
              event.stopPropagation();
              setToDelete(true);
            }}
          >
            Delete Recipes
          </button>
        )}
        {editMode && (
          <button
            type="button"
            onClick={event => {
              event.stopPropagation();
              setListToDelete(id);
            }}
          >
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
