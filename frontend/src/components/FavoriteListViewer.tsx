import React, { useState } from "react";
import FavoriteList from "../sharedtypes/FavoriteList";
import RecipeCard from "./RecipeCard";

type FavoriteListViewerProps = {
  list: FavoriteList;
};

function FavoriteListViewer({ list }: FavoriteListViewerProps) {
  // eslint-disable-next-line no-underscore-dangle
  const id = list._id;
  const { listItems, listName } = list;
  const [showListItems, setShowListItems] = useState(false);

  const handleClick = () => {
    setShowListItems(!showListItems);
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        <h3>{listName}</h3>
      </div>
      {showListItems &&
        listItems.map(item => (
          <RecipeCard
            id={item.recipeId}
            key={item.recipeId}
            image={item.imageUrl}
            title={item.title}
          />
        ))}
    </>
  );
}

export default FavoriteListViewer;
