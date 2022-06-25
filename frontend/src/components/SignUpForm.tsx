/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import FormValues from "../sharedtypes/RegisterFormValues";
import StyledInput from "../styles/Input.style";
import StyledButton from "../styles/Button.style";
import StyledSignUpForm from "../styles/SignUpForm.style";

interface Props {
  onSubmit: (values: FormValues) => void;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[*.!@#$%^&(){}[\]:;<>,.?/~_+-=|])[A-Za-z\d*.!@#$%^&(){}[\]:;<>,.?/~_+-=|]{8,}$/,
      "Must Contain At Least 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
});

function SignUpForm({ onSubmit }: Props): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  return (
    <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <p>*Note: Feel free to use a fake email/password when signing up</p>
      <StyledInput {...register("name")} type="text" placeholder="Name" />
      {errors.name && <p> {errors.name.message} </p>}
      <StyledInput {...register("email")} type="email" placeholder="Email" />
      {errors.email && <p> {errors.email.message} </p>}
      <StyledInput
        {...register("password")}
        type="password"
        placeholder="Password"
      />
      {errors.password && <p> {errors.password.message} </p>}
      <StyledInput
        {...register("passwordConfirmation")}
        type="password"
        placeholder="Password Confirmation"
      />
      {errors.passwordConfirmation && (
        <p> {errors.passwordConfirmation.message} </p>
      )}
      <div>
        <StyledButton type="submit" value="Submit">
          Submit
        </StyledButton>
        <Link to="/login">
          <StyledButton>Sign In</StyledButton>
        </Link>
      </div>
    </StyledSignUpForm>
  );
}

export default SignUpForm;
