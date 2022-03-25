import React from "react";
import { AxiosError } from "axios";
import useSignup from "../controllers/SignupController";
import SignUpForm from "../components/SignUpForm";

function Signup(): JSX.Element {
  const { onSubmit, isLoading, isError, error } = useSignup();

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error :{(error as AxiosError).message}</p>}
      <SignUpForm onSubmit={onSubmit} />
    </main>
  );
}

export default Signup;
