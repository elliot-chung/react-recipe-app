/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import FormValues from "../sharedtypes/FormValues";

interface Props {
  onSubmit: (values: FormValues) => void;
}

function SignUpForm({ onSubmit }: Props): JSX.Element {
  const { register, handleSubmit } = useForm<FormValues>();

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Name"
        />
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
        />
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
        />
        <input
          {...register("passwordConfirmation", { required: true })}
          type="password"
          placeholder="Password Confirmation"
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default SignUpForm;
