import React, { useContext } from "react";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import LoginContext from "../contexts/LoginContext";
import useLogin from "../controllers/LoginController";
import StyledLoginPage from "../styles/Login.style";

function Login(): JSX.Element {
  const userStates = useContext(LoginContext);
  const { isLoggedIn } = userStates;
  const { isLoading, isError, isSuccess, error, onSubmit } = useLogin();

  if (isLoggedIn) {
    return (
      <main>
        <h1>You are already logged in</h1>
        <Link to="/">Go to Home</Link>
      </main>
    );
  }

  return (
    <StyledLoginPage>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {(error as AxiosError).message}</p>}
      {isSuccess && <p>Success!</p>}
      <SignInForm onSubmit={onSubmit} />
    </StyledLoginPage>
  );
}

export default Login;
