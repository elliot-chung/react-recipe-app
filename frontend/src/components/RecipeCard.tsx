import React from "react";

interface RecipeCardProps {
  image: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  title: string;
}

function RecipeCard({
  image,
  readyInMinutes,
  servings,
  sourceUrl,
  title,
}: RecipeCardProps): JSX.Element {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>Ready in {readyInMinutes} minutes</p>
      <p>Servings: {servings}</p>
      <a href={sourceUrl}>Original</a>
    </div>
  );
}

export default RecipeCard;
