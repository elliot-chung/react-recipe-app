import React, { useContext } from "react";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import Config from "../config.json";
import SignInForm from "../components/SignInForm";
import FormValues from "../sharedtypes/LoginFormValues";
import LoginContext from "../contexts/LoginContext";
import useLogin from "../controllers/LoginController";
import {
  googleFailure,
  googleSuccess,
} from "../controllers/GoogleLoginController";

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
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {(error as AxiosError)?.response?.data?.error}</p>}
      {isSuccess && <p>Success!</p>}
      <SignInForm onSubmit={onSubmit} />
      <GoogleLogin
        clientId={Config.GOOGLE_CLIENT_ID}
        buttonText="Sign in with Google"
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
      />
      <Link to="/signup">Sign Up</Link>
    </>
  );
}

export default Login;
