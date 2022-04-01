import React from "react";
import StyledEditModeButton from "../styles/EditModeButton.style";

type EditModeButtonProps = {
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
};

function EditModeButton({ editMode, setEditMode }: EditModeButtonProps) {
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
