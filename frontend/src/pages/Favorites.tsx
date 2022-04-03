import React from "react";
import FavoriteContext from "../contexts/FavoriteContext";
import EditModeButton from "../components/EditModeButton";
import FavoritesInterface from "../components/FavoritesInterface";
import DeleteModal from "../components/DeleteModal";
import useFavorite from "../controllers/FavoriteController";
import StyledFavoritePage from "../styles/Favorite.style";
import DeleteListModal from "../components/DeleteListModal";
import AddListButton from "../components/AddListButton";

function Favorites(): JSX.Element {
  const favoriteContextObj = useFavorite();

  return (
    <FavoriteContext.Provider value={favoriteContextObj}>
      <StyledFavoritePage>
        {favoriteContextObj.toDelete && <DeleteModal />}
        {!!favoriteContextObj.listToDelete && <DeleteListModal />}
        <h1>Favorites</h1>
        {favoriteContextObj.editMode && !favoriteContextObj.addFavorite && (
          <AddListButton />
        )}
        <EditModeButton />
        <FavoritesInterface key={favoriteContextObj.interfaceKey} />
      </StyledFavoritePage>
    </FavoriteContext.Provider>
  );
}

export default Favorites;
