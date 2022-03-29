import React from "react";
import EditModeButton from "../components/EditModeButton";
import FavoritesInterface from "../components/FavoritesInterface";
import useFavorite from "../controllers/FavoriteController";
import StyledFavoritePage from "../styles/Favorite.style";

function Favorites(): JSX.Element {
  const {
    editMode,
    setEditMode,
    listId,
    setListId,
    selected,
    setSelected,
    toDelete,
    setToDelete,
    toMove,
    setToMove,
    listMode,
  } = useFavorite();

  return (
    <StyledFavoritePage>
      <h1>Favorites</h1>
      <EditModeButton editMode={editMode} setEditMode={setEditMode} />
      <FavoritesInterface />
    </StyledFavoritePage>
  );
}

export default Favorites;
