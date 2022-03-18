import React, { useCallback, useEffect } from "react";

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
    <aside>
      FavoriteModal
      <button type="button" onClick={closeModal}>
        ❌
      </button>
    </aside>
  ) : null;
}

export default FavoriteModal;
