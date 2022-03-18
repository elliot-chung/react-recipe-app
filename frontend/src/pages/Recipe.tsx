import React from "react";
import { Navigate } from "react-router-dom";
import RecipeInstructions from "../components/RecipeInstructions";
import RecipeSideBar from "../components/RecipeSideBar";
import useRecipe from "../controllers/RecipeController";
import StyledRecipePage from "../styles/Recipe.style";

let title = "";
let imgUrl = "";
let readyInMinutes = 0;
let servings = 0;
let instructions = "";

function Recipe(): JSX.Element {
  const { isError, isSuccess, data } = useRecipe();

  if (isError) return <Navigate to="/error" />;

  if (isSuccess) {
    title = data?.data?.title;
    imgUrl = data?.data?.image;
    readyInMinutes = data?.data?.readyInMinutes;
    servings = data?.data?.servings;
    instructions = data?.data?.instructions;
  }

  return (
    <StyledRecipePage>
      <RecipeSideBar
        imgUrl={imgUrl}
        title={title}
        readyInMinutes={readyInMinutes}
        servings={servings}
      />
      <div>
        <RecipeInstructions instructions={instructions} />
      </div>
    </StyledRecipePage>
  );
}

export default Recipe;
