import React, { useCallback, useContext } from "react";
import FavoriteContext from "../contexts/FavoriteContext";
import StyledAddListButton from "../styles/AddListButton.style";

function AddListButton(): JSX.Element {
  const { setAddFavorite } = useContext(FavoriteContext);
  const handleClick = useCallback(() => {
    setAddFavorite(true);
  }, [setAddFavorite]);

  return (
    <StyledAddListButton type="button" onClick={handleClick}>
      <h5>+</h5>
    </StyledAddListButton>
  );
}

export default AddListButton;
