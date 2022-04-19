import React, { useContext } from "react";
import LoginBanner from "../components/LoginBanner";
import LoginContext from "../contexts/LoginContext";
import StyledHomePage from "../styles/Home.style";
import StyledRecipeCardContainer from "../styles/RecipeCardContainer.style";

function Home(): JSX.Element {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <StyledHomePage>
      {!isLoggedIn && <LoginBanner />}
      <h1>Popular Recipes</h1>
      <StyledRecipeCardContainer>
        <p>Recipe Cards Go Here</p>
      </StyledRecipeCardContainer>
    </StyledHomePage>
  );
}

export default Home;
