import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useMutation } from "react-query";
import SignInForm from "../components/SignInForm";
import FormValues from "../sharedtypes/LoginFormValues";

function Login(): JSX.Element {
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

  const postUser = async (values: FormValues): Promise<void> =>
    (await axios.post("http://localhost:5000/users/loginUser", values)).data;

  const mutation = useMutation((values: FormValues) => postUser(values));
  const { isLoading, isError, isSuccess } = mutation;

  const onSubmit = (values: FormValues): void => {
    mutation.mutate(values);
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error :(</p>}
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
