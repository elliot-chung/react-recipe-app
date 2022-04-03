import React, { useEffect, useContext } from "react";
import { AxiosError } from "axios";
import FavoriteContext from "../contexts/FavoriteContext";
import useDeleteFavoriteList from "../controllers/DeleteFavoriteListController";
import StyledModal from "../styles/Modal.style";

function DeleteListModal(): JSX.Element {
  const { listToDelete, setEditMode, setListToDelete } =
    useContext(FavoriteContext);
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
            mutate(listToDelete);
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
