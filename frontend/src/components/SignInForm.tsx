/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import FormValues from "../sharedtypes/LoginFormValues";

interface Props {
  onSubmit: (values: FormValues) => void;
}

function SignInForm({ onSubmit }: Props): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
        />
        {errors.email && <p> {errors.email.message} </p>}
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
        />
        {errors.password && <p> {errors.password.message} </p>}
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}

export default SignInForm;
