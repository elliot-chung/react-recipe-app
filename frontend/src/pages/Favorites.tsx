import React from "react";
import EditModeButton from "../components/EditModeButton";
import FavoritesInterface from "../components/FavoritesInterface";
import DeleteModal from "../components/DeleteModal";
import useFavorite from "../controllers/FavoriteController";
import StyledFavoritePage from "../styles/Favorite.style";
import DeleteListModal from "../components/DeleteListModal";
import AddListButton from "../components/AddListButton";

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
    listToDelete,
    setListToDelete,
    addFavorite,
    setAddFavorite,
    listMode,
    interfaceKey,
  } = useFavorite();

  return (
    <StyledFavoritePage>
      {toDelete && (
        <DeleteModal
          listId={listId}
          selected={selected}
          setEditMode={setEditMode}
          setToDelete={setToDelete}
        />
      )}
      {!!listToDelete && (
        <DeleteListModal
          listId={listToDelete}
          setEditMode={setEditMode}
          setListToDelete={setListToDelete}
        />
      )}
      <h1>Favorites</h1>
      {editMode && !addFavorite && (
        <AddListButton setAddFavorite={setAddFavorite} />
      )}
      <EditModeButton editMode={editMode} setEditMode={setEditMode} />
      <FavoritesInterface
        key={interfaceKey}
        listId={listId}
        addFavorite={addFavorite}
        setAddFavorite={setAddFavorite}
        setEditMode={setEditMode}
        setListId={setListId}
        setSelected={setSelected}
        setToDelete={setToDelete}
        setListToDelete={setListToDelete}
        listMode={listMode}
      />
    </StyledFavoritePage>
  );
}

export default Favorites;
