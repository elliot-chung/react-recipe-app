import React from "react";
import placeholder from "../assets/images/imageplaceholder.jpg";
import FavoriteHeart from "./FavoriteHeart";

type RecipeSidebarProps = {
  imgUrl: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  favoriteState: string;
  setShowModal: (state: boolean) => void;
};

const loading = "Loading...";

function RecipeSideBar({
  imgUrl,
  title,
  readyInMinutes,
  servings,
  favoriteState,
  setShowModal,
}: RecipeSidebarProps) {
  return (
    <section>
      <img src={imgUrl || placeholder} alt={title} />
      <h1>{title || loading}</h1>
      <p>Ready in {readyInMinutes || loading} minutes</p>
      <p>Servings: {servings || loading}</p>
      <FavoriteHeart
        favoriteState={favoriteState}
        setShowModal={setShowModal}
      />
    </section>
  );
}

export default RecipeSideBar;
