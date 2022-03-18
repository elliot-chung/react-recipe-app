import React from "react";
import placeholder from "../assets/images/imageplaceholder.jpg";

type RecipeSidebarProps = {
  imgUrl: string;
  title: string;
  readyInMinutes: number;
  servings: number;
};

const loading = "Loading...";

function RecipeSideBar({
  imgUrl,
  title,
  readyInMinutes,
  servings,
}: RecipeSidebarProps) {
  return (
    <div>
      <img src={imgUrl || placeholder} alt={title} />
      <h1>{title || loading}</h1>
      <p>Ready in {readyInMinutes || loading} minutes</p>
      <p>Servings: {servings || loading}</p>
    </div>
  );
}

export default RecipeSideBar;
