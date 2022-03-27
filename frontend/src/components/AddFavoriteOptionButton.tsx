import React, { useCallback, useRef, useState } from "react";

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

  return (
    <div>
      {editing ? (
        <form>
          <input
            type="text"
            placeholder="Favorite List Name"
            ref={inputRef}
            onKeyPress={handleKeyPress}
          />
          <button type="button" onClick={saveNewList}>
            Save
          </button>
          {duplicateName && <p>List name already exists</p>}
        </form>
      ) : (
        <button type="button" onClick={addNewList}>
          Add to a New List
        </button>
      )}
    </div>
  );
}

export default AddFavoriteOptionButton;
