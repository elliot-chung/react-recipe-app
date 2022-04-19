import React from "react";
import { Navigate } from "react-router-dom";
import FavoriteModal from "../components/FavoriteModal";
import RecipeIngredients from "../components/RecipeIngredients";
import RecipeInstructions from "../components/RecipeInstructions";
import RecipeSideBar from "../components/RecipeSideBar";
import useRecipe from "../hooks/RecipeController";
import ListItem from "../sharedtypes/ListItem";
import StyledRecipePage from "../styles/Recipe.style";
import StyledRecipeContentContainer from "../styles/RecipeContentContainer.style";

function Recipe(): JSX.Element {
  const {
    isError,
    id,
    imgUrl,
    title,
    readyInMinutes,
    servings,
    sourceUrl,
    instructions,
    ingredients,
    favoriteState,
    setFavoriteState,
    modalKey,
    showModal,
    setShowModal,
  } = useRecipe();

  if (isError) return <Navigate to="/error" />;

  const recipe: ListItem = {
    title,
    imageUrl: imgUrl,
    recipeId: id,
    timeOfFavorite: new Date(),
  };

  return (
    <StyledRecipePage>
      <FavoriteModal
        key={modalKey}
        recipe={recipe}
        setFavoriteState={setFavoriteState}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <RecipeSideBar
        imgUrl={imgUrl}
        title={title}
        readyInMinutes={readyInMinutes}
        servings={servings}
        sourceUrl={sourceUrl}
        favoriteState={favoriteState}
        setShowModal={setShowModal}
      />
      <StyledRecipeContentContainer>
        <RecipeIngredients ingredients={ingredients} />
        <RecipeInstructions instructions={instructions} />
      </StyledRecipeContentContainer>
    </StyledRecipePage>
  );
}

export default Recipe;
