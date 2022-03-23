import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StyledRecipeCard from "../styles/RecipeCard.style";

interface RecipeCardProps {
  image: string;
  id: number;
  readyInMinutes: number;
  servings: number;
  title: string;
}

function RecipeCard({
  image,
  id,
  readyInMinutes,
  servings,
  title,
}: RecipeCardProps): JSX.Element {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`/recipe/${id}`);
  }, [navigate, id]);

  return (
    <StyledRecipeCard onClick={handleClick}>
      <img src={image} alt={title} />
      <div>
        <h5>{title}</h5>
        <p>Ready in {readyInMinutes} minutes</p>
        <p>Servings: {servings}</p>
      </div>
    </StyledRecipeCard>
  );
}

export default RecipeCard;
