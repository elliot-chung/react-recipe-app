import React, { useCallback, useEffect } from "react";
import StyledFavoriteModal from "../styles/FavoriteModal.style";

type FavoriteModalProps = {
  recipeId: number;
  setFavoriteState: (state: string) => void;
  showModal: boolean;
  setShowModal: (state: boolean) => void;
};

function FavoriteModal({
  recipeId,
  setFavoriteState,
  showModal,
  setShowModal,
}: FavoriteModalProps) {
  const closeModal = useCallback(() => setShowModal(false), [setShowModal]);
  useEffect(() => {
    setFavoriteState(recipeId === 535835 ? "favorite" : "notFavorite");
  }, [recipeId, setFavoriteState]);
  return showModal ? (
    <StyledFavoriteModal>
      <div>
        <button type="button" onClick={closeModal}>
          ❌
        </button>
      </div>
    </StyledFavoriteModal>
  ) : null;
}

export default FavoriteModal;
