import React from "react";
import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import SignUpForm from "../components/SignUpForm";
import FormValues from "../sharedtypes/RegisterFormValues";

function Signup(): JSX.Element {
  const postUser = async (values: FormValues): Promise<void> =>
    axios.post("http://localhost:5000/users/addUser", values);

  const mutation = useMutation((values: FormValues) => postUser(values));
  const { isLoading, isError, isSuccess, error } = mutation;

  const onSubmit = (values: FormValues): void => {
    mutation.mutate(values);
  };

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error :{(error as AxiosError)?.response?.data?.error}</p>}
      {isSuccess && <p>Success!</p>}
      <SignUpForm onSubmit={onSubmit} />
    </main>
  );
}

export default Signup;
