import React from "react";

type EditModeButtonProps = {
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
};

function EditModeButton({ editMode, setEditMode }: EditModeButtonProps) {
  const handleClick = () => {
    setEditMode(!editMode);
  };
  return (
    <button type="button" onClick={handleClick}>
      {editMode ? "Edit" : "Cancel"}
    </button>
  );
}

export default EditModeButton;
