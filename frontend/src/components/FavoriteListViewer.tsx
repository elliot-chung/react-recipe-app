import React, { useCallback, useEffect, useState } from "react";
import FavoriteList from "../sharedtypes/FavoriteList";
import StyledFavoriteListViewer from "../styles/FavoriteListViewer.style";
import StyledRecipeCardContainer from "../styles/RecipeCardContainer.style";
import RecipeCard from "./RecipeCard";

type FavoriteListViewerProps = {
  list: FavoriteList;
  listId: string;
  setListId: React.Dispatch<React.SetStateAction<string>>;
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  setToDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setToMove: React.Dispatch<React.SetStateAction<boolean>>;
  listMode: string;
};

function FavoriteListViewer({
  list,
  listId,
  setListId,
  setSelected,
  setToDelete,
  setToMove,
  listMode,
}: FavoriteListViewerProps) {
  // eslint-disable-next-line no-underscore-dangle
  const id = list._id;
  const { listItems, listName } = list;
  const [showListItems, setShowListItems] = useState(false);

  const handleClick = useCallback(() => {
    setShowListItems(!showListItems);
  }, [showListItems]);

  const findDBID = useCallback(
    (recipeId: number) =>
      // eslint-disable-next-line no-underscore-dangle
      listItems.find(item => item.recipeId === recipeId)?._id,
    [listItems]
  );

  const selectFn = useCallback(
    (recipeId: number) => {
      if (listMode === "edit") {
        const dbid = findDBID(recipeId);
        if (!dbid) return false;
        setSelected([dbid]);
        setListId(id);
        return true;
      }
      if (listMode === "select" && id === listId) {
        const dbid = findDBID(recipeId);
        if (!dbid) return false;
        setSelected(selected => [...selected, dbid]);
        return true;
      }
      return false;
    },
    [findDBID, id, listId, listMode, setListId, setSelected]
  );

  const deselectFn = useCallback(
    (recipeId: number) => {
      const dbid = findDBID(recipeId);
      if (!dbid) return true;
      setSelected(selectedArr =>
        selectedArr.filter(selected => selected !== dbid)
      );
      if (listMode === "edit") {
        setListId("");
      }
      return false;
    },
    [findDBID, listMode, setListId, setSelected]
  );

  return (
    <>
      <StyledFavoriteListViewer
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        <h3>{listName}</h3>
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
