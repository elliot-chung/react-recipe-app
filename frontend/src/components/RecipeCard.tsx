import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledRecipeCard from "../styles/RecipeCard.style";

interface RecipeCardProps {
  image: string;
  id: number;
  readyInMinutes?: number;
  servings?: number;
  title: string;
  selectFn?: (recipeId: number) => boolean;
  deselectFn?: (recipeId: number) => boolean;
}

function RecipeCard({
  image,
  id,
  readyInMinutes,
  servings,
  title,
  selectFn,
  deselectFn,
}: RecipeCardProps): JSX.Element {
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    if (selectFn && !selected) {
      setSelected(selectFn(id));
      return;
    }
    if (deselectFn && selected) {
      setSelected(deselectFn(id));
      return;
    }
    navigate(`/recipe/${id}`);
  }, [selectFn, selected, deselectFn, navigate, id]);

  return (
    <StyledRecipeCard
      onClick={handleClick}
      className={selected ? "selected" : undefined}
    >
      <img
        src={image || "https://spoonacular.com/recipeImages/default.jpg"}
        alt={title}
      />
      <div>
        <h5>{title}</h5>
        {!!readyInMinutes && <p>Ready in {readyInMinutes} minutes</p>}
        {!!servings && <p>Servings: {servings}</p>}
      </div>
    </StyledRecipeCard>
  );
}

RecipeCard.defaultProps = {
  readyInMinutes: 0,
  servings: 0,
  selectFn: undefined,
  deselectFn: undefined,
};

export default RecipeCard;
