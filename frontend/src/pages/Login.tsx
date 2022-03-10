import React, { useContext } from "react";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import FormValues from "../sharedtypes/LoginFormValues";
import LoginContext from "../contexts/LoginContext";
import useLogin from "../controllers/LoginController";

function Login(): JSX.Element {
  const userStates = useContext(LoginContext);
  const { isLoggedIn } = userStates;
  const { isLoading, isError, isSuccess, error, mutate } = useLogin();

  const onSubmit = (values: FormValues): void => {
    mutate(values);
  };

  if (isLoggedIn) {
    return (
      <>
        <h1>You are already logged in</h1>
        <Link to="/">Go to Home</Link>
      </>
    );
  }

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {(error as AxiosError)?.response?.data?.error}</p>}
      {isSuccess && <p>Success!</p>}
      <SignInForm onSubmit={onSubmit} />
      <Link to="/signup">Sign Up</Link>
    </main>
  );
}

export default Login;
