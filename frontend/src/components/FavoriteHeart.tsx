import React, { useCallback } from "react";
import StyledButton from "../styles/Button.style";

type FavoriteHeartProps = {
  favoriteState: string;
  setShowModal: (state: boolean) => void;
};

function FavoriteHeart({ favoriteState, setShowModal }: FavoriteHeartProps) {
  const loading = favoriteState === "loading";
  const isFavorite = favoriteState === "favorite";
  const isNotFavorite = favoriteState === "notFavorite";

  const handleClick = useCallback(() => setShowModal(true), [setShowModal]);

  return (
    <StyledButton type="button" disabled={loading} onClick={handleClick}>
      {isFavorite && (
        <p role="img" aria-label="heart">
          ❤️
        </p>
      )}
      {isNotFavorite && (
        <p role="img" aria-label="heart">
          🖤
        </p>
      )}
    </StyledButton>
  );
}

export default FavoriteHeart;
