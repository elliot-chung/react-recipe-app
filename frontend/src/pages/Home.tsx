import React, { useContext } from "react";
import LoginBanner from "../components/LoginBanner";
import RecipeCard from "../components/RecipeCard";
import LoginContext from "../contexts/LoginContext";
import usePopularRecipes from "../hooks/PopularRecipeController";
import SearchResult from "../sharedtypes/SearchResult";
import StyledHomePage from "../styles/Home.style";
import StyledRecipeCardContainer from "../styles/RecipeCardContainer.style";

function Home(): JSX.Element {
  const { isLoggedIn } = useContext(LoginContext);
  const { recipes } = usePopularRecipes();

  return (
    <StyledHomePage>
      {!isLoggedIn && <LoginBanner />}
      <h1>Popular Recipes</h1>
      <StyledRecipeCardContainer>
        {recipes.map((recipe: SearchResult) => (
          <RecipeCard
            key={recipe.id}
            image={recipe.image}
            id={recipe.id}
            readyInMinutes={recipe.readyInMinutes}
            servings={recipe.servings}
            title={recipe.title}
          />
        ))}
      </StyledRecipeCardContainer>
    </StyledHomePage>
  );
}

export default Home;
