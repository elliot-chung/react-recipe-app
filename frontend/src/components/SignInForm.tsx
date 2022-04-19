/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormValues from "../sharedtypes/LoginFormValues";
import StyledButton from "../styles/Button.style";
import StyledInput from "../styles/Input.style";
import StyledSignInForm from "../styles/SignInForm.style";

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
    <StyledSignInForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign In</h1>
      <StyledInput
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
      />
      {errors.email && <p> {errors.email.message} </p>}
      <StyledInput
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
      />
      {errors.password && <p> {errors.password.message} </p>}
      <div>
        <StyledButton type="submit">Sign In</StyledButton>
        <Link to="/signup">
          <StyledButton>Sign Up</StyledButton>
        </Link>
      </div>
    </StyledSignInForm>
  );
}

export default SignInForm;
