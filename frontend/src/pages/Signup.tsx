import React from "react";
import { AxiosError } from "axios";
import useSignup from "../controllers/SignupController";
import SignUpForm from "../components/SignUpForm";
import StyledSignupPage from "../styles/Signup.style";

function Signup(): JSX.Element {
  const { onSubmit, isLoading, isError, error } = useSignup();

  return (
    <StyledSignupPage>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error :{(error as AxiosError).message}</p>}
      <SignUpForm onSubmit={onSubmit} />
    </StyledSignupPage>
  );
}

export default Signup;
