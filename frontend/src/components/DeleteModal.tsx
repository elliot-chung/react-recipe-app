import { AxiosError } from "axios";
import React, { useEffect } from "react";
import useDeleteFavorite from "../controllers/DeleteFavoriteController";
import StyledModal from "../styles/Modal.style";

type DeleteModalProps = {
  listId: string;
  selected: number[];
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  setToDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

function DeleteModal({
  listId,
  selected,
  setEditMode,
  setToDelete,
}: DeleteModalProps) {
  const deleteData = {
    listId,
    idsToDelete: selected as [number],
  };
  const { mutate, error, isLoading, isError, isSuccess } = useDeleteFavorite();

  useEffect((): void => {
    if (isSuccess) {
      setEditMode(false);
      setToDelete(false);
    }
  }, [isSuccess, selected, setEditMode, setToDelete]);

  return (
    <StyledModal>
      <div>
        <h2>Are You Sure You Want to Delete the Selected Items?</h2>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {(error as AxiosError).message}</p>}
        <button
          type="button"
          onClick={() => {
            setToDelete(false);
          }}
          disabled={isLoading}
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => {
            mutate(deleteData);
          }}
          disabled={isLoading}
        >
          Delete
        </button>
      </div>
    </StyledModal>
  );
}

export default DeleteModal;
