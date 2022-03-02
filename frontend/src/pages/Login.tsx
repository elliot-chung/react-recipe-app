import React, { useContext } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useMutation } from "react-query";
import SignInForm from "../components/SignInForm";
import FormValues from "../sharedtypes/LoginFormValues";
import UserObj from "../sharedtypes/UserObj";
import LoginContext from "../contexts/LoginContext";

function Login(): JSX.Element {
  const userStates = useContext(LoginContext);
  const { isLoggedIn, login, setUser } = userStates;
  const navigate = useNavigate();

  const googleSuccess = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ): Promise<void> => {
    const res = response as GoogleLoginResponse;
    const profileObj = res?.profileObj;
    const token = res?.accessToken;

    console.log(profileObj, token);
  };

  const googleFailure = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ): void => {
    console.log(response);
  };

  const storeUserToken = (response: AxiosResponse) => {
    const { token } = response.data;
    localStorage.setItem("token", token);
    const user = jwt_decode<UserObj>(token);
    setUser({
      name: user.name,
      email: user.email,
    });
    login();
    navigate("/");
  };

  const loginUser = async (values: FormValues): Promise<AxiosResponse> =>
    axios.post("http://localhost:5000/users/loginUser", values);

  const { mutate, isLoading, isError, isSuccess, error } = useMutation(
    loginUser,
    {
      onSuccess: storeUserToken,
    }
  );

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
      {isError && (
        <p>Error: {(error as AxiosError)?.response?.data?.error?.message}</p>
      )}
      {isSuccess && <p>Success!</p>}
      <SignInForm onSubmit={onSubmit} />
      <GoogleLogin
        clientId="853913000249-hbmvigouf2t3b0heg9noss90hk5l9g5b.apps.googleusercontent.com"
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
