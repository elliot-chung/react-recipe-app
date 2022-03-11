import React from "react";
import StyledRecipeCard from "./styles/RecipeCard.style";

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
    <StyledRecipeCard>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>Ready in {readyInMinutes} minutes</p>
        <p>Servings: {servings}</p>
        <a href={sourceUrl}>Original</a>
      </div>
    </StyledRecipeCard>
  );
}

export default RecipeCard;
