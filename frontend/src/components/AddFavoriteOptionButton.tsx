import React, { useCallback, useEffect, useRef, useState } from "react";
import StyledButton from "../styles/Button.style";
import StyledInput from "../styles/Input.style";

type AddFavoriteOptionButtonProps = {
  createNewList: (name: string) => void;
};

function AddFavoriteOptionButton({
  createNewList,
}: AddFavoriteOptionButtonProps) {
  const [editing, setEditing] = useState(false);
  const [duplicateName, setDuplicateName] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addNewList = useCallback(() => {
    setEditing(true);
  }, []);

  const cancelList = useCallback(() => {
    setEditing(false);
  }, []);

  const saveNewList = useCallback(
    (e: React.SyntheticEvent): void => {
      e.preventDefault();
      if (inputRef.current && inputRef.current.value) {
        try {
          createNewList(inputRef.current.value);
          setDuplicateName(false);
          setEditing(false);
        } catch (error) {
          setDuplicateName(true);
        }
      }
    },
    [createNewList]
  );

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === "Enter") {
        saveNewList(e);
      }
    },
    [saveNewList]
  );

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing, inputRef]);

  return (
    <div>
      {editing ? (
        <form>
          <StyledInput
            type="text"
            placeholder="Favorite List Name"
            ref={inputRef}
            onBlur={cancelList}
            onKeyPress={handleKeyPress}
          />
          <StyledButton
            type="button"
            onClick={saveNewList}
            onMouseDown={event => {
              event.preventDefault();
              event.stopPropagation();
            }}
          >
            Save
          </StyledButton>
          {duplicateName && <p>List name already exists</p>}
        </form>
      ) : (
        <StyledButton type="button" onClick={addNewList}>
          Add to a New List
        </StyledButton>
      )}
    </div>
  );
}

export default AddFavoriteOptionButton;
