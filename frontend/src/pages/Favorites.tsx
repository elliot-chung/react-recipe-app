import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../contexts/FavoriteContext";
import EditModeButton from "../components/EditModeButton";
import FavoritesInterface from "../components/FavoritesInterface";
import DeleteModal from "../components/DeleteModal";
import useFavorite from "../controllers/FavoriteController";
import StyledFavoritePage from "../styles/Favorite.style";
import DeleteListModal from "../components/DeleteListModal";
import AddListButton from "../components/AddListButton";
import LoginContext from "../contexts/LoginContext";
import StyledButton from "../styles/Button.style";

function Favorites(): JSX.Element {
  const favoriteContextObj = useFavorite();
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <FavoriteContext.Provider value={favoriteContextObj}>
      <StyledFavoritePage>
        {favoriteContextObj.toDelete && <DeleteModal />}
        {!!favoriteContextObj.listToDelete && <DeleteListModal />}
        <h1>Favorites</h1>
        {favoriteContextObj.editMode && !favoriteContextObj.addFavorite && (
          <AddListButton />
        )}
        {!isLoggedIn && (
          <Link to="/login">
            <StyledButton>Login To See Your Favorite Recipes</StyledButton>
          </Link>
        )}
        {isLoggedIn && <EditModeButton />}
        {isLoggedIn && (
          <FavoritesInterface key={favoriteContextObj.interfaceKey} />
        )}
      </StyledFavoritePage>
    </FavoriteContext.Provider>
  );
}

export default Favorites;
