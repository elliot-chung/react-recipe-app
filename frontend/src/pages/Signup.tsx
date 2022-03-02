import React from "react";
import axios from "axios";
import { useMutation } from "react-query";
import SignUpForm from "../components/SignUpForm";
import FormValues from "../sharedtypes/RegisterFormValues";

function Signup(): JSX.Element {
  const postUser = async (values: FormValues): Promise<void> =>
    (await axios.post("http://localhost:5000/users/addUser", values)).data;

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
      <SignUpForm onSubmit={onSubmit} />
    </>
  );
}

export default Signup;
