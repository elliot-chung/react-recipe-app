import React from "react";
import EditModeButton from "../components/EditModeButton";
import FavoritesInterface from "../components/FavoritesInterface";
import useFavorite from "../controllers/FavoriteController";

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
    <main>
      <h1>Favorites</h1>
      <EditModeButton editMode={editMode} setEditMode={setEditMode} />
      <FavoritesInterface />
    </main>
  );
}

export default Favorites;
