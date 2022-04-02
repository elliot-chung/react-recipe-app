import { AxiosError } from "axios";
import React, { useEffect } from "react";
import useDeleteFavoriteList from "../controllers/DeleteFavoriteListController";
import StyledModal from "../styles/Modal.style";

type DeleteListModalProps = {
  listId: string;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  setListToDelete: React.Dispatch<React.SetStateAction<string>>;
};

function DeleteListModal({
  listId,
  setEditMode,
  setListToDelete,
}: DeleteListModalProps) {
  const { mutate, error, isLoading, isError, isSuccess } =
    useDeleteFavoriteList();

  useEffect((): void => {
    if (isSuccess) {
      setEditMode(false);
      setListToDelete("");
    }
  }, [isSuccess, setEditMode, setListToDelete]);

  return (
    <StyledModal>
      <div>
        <h2>Are You Sure You Want to Delete this List?</h2>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {(error as AxiosError).message}</p>}
        <button
          type="button"
          onClick={() => {
            setListToDelete("");
          }}
          disabled={isLoading}
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => {
            mutate(listId);
          }}
          disabled={isLoading}
        >
          Delete
        </button>
      </div>
    </StyledModal>
  );
}

export default DeleteListModal;
