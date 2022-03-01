import React from "react";
import axios from "axios";
import { useMutation } from "react-query";
import SignUpForm from "../components/SignUpForm";
import FormValues from "../types/FormValues";

function Signup(): JSX.Element {
  const postUser = async (values: FormValues): Promise<void> =>
    (await axios.post("http://localhost:5000/users/addUser", values)).data;

  const mutation = useMutation((values: FormValues) => postUser(values));

  const onSubmit = (values: FormValues): void => {
    mutation.mutate(values);
  };

  return <SignUpForm onSubmit={onSubmit} />;
}

export default Signup;
