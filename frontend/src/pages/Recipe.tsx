import React from "react";
import { Navigate } from "react-router-dom";
import FavoriteModal from "../components/FavoriteModal";
import RecipeInstructions from "../components/RecipeInstructions";
import RecipeSideBar from "../components/RecipeSideBar";
import useRecipe from "../controllers/RecipeController";
import StyledRecipePage from "../styles/Recipe.style";

function Recipe(): JSX.Element {
  const {
    isError,
    id,
    imgUrl,
    title,
    readyInMinutes,
    servings,
    instructions,
    favoriteState,
    setFavoriteState,
    showModal,
    setShowModal,
  } = useRecipe();

  if (isError) return <Navigate to="/error" />;

  return (
    <StyledRecipePage>
      <FavoriteModal
        recipeId={id}
        setFavoriteState={setFavoriteState}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <RecipeSideBar
        imgUrl={imgUrl}
        title={title}
        readyInMinutes={readyInMinutes}
        servings={servings}
        favoriteState={favoriteState}
        setShowModal={setShowModal}
      />
      <article>
        <RecipeInstructions instructions={instructions} />
      </article>
    </StyledRecipePage>
  );
}

export default Recipe;
