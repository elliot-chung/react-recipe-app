import React from "react";
import { Link } from "react-router-dom";
import StyledButton from "../styles/Button.style";
import StyledLoginBanner from "../styles/LoginBanner.style";

function LoginBanner(): JSX.Element {
  return (
    <StyledLoginBanner>
      <Link to="/login">
        <StyledButton>Login</StyledButton>
      </Link>
      <h2>To Add Recipes to Your Favorites</h2>
    </StyledLoginBanner>
  );
}

export default LoginBanner;
