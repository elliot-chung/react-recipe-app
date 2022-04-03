import React, { useContext } from "react";
import FavoriteContext from "../contexts/FavoriteContext";
import StyledEditModeButton from "../styles/EditModeButton.style";

function EditModeButton() {
  const { editMode, setEditMode } = useContext(FavoriteContext);
  const handleClick = () => {
    setEditMode(!editMode);
  };
  return (
    <StyledEditModeButton type="button" onClick={handleClick}>
      {editMode ? "Cancel" : "Edit"}
    </StyledEditModeButton>
  );
}

export default EditModeButton;
