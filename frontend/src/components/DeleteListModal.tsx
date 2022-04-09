import React, { useEffect, useContext } from "react";
import { AxiosError } from "axios";
import FavoriteContext from "../contexts/FavoriteContext";
import useDeleteFavoriteList from "../controllers/DeleteFavoriteListController";
import StyledModalBackground from "../styles/ModalBackground.style";
import StyledButton from "../styles/Button.style";
import RedButton from "../styles/RedButton.style";
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
    <StyledModalBackground>
      <StyledModal>
        <h2>Are You Sure You Want to Delete this List?</h2>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {(error as AxiosError).message}</p>}
        <StyledButton
          type="button"
          onClick={() => {
            setListToDelete("");
          }}
          disabled={isLoading}
        >
          Cancel
        </StyledButton>
        <RedButton
          type="button"
          onClick={() => {
            mutate(listToDelete);
          }}
          disabled={isLoading}
        >
          Delete
        </RedButton>
      </StyledModal>
    </StyledModalBackground>
  );
}

export default DeleteListModal;
