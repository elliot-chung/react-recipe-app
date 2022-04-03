import React, { useCallback } from "react";
import StyledAddListButton from "../styles/AddListButton.style";

type AddListButtonProps = {
  setAddFavorite: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddListButton({ setAddFavorite }: AddListButtonProps) {
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
