import React from "react";
import { Link } from "react-router-dom";
import SignInFrom from "../components/SignInForm";

function Login(): JSX.Element {
  return (
    <>
      <SignInFrom />
      <Link to="/signup">Sign Up</Link>
    </>
  );
}

export default Login;
