import React from "react";

function SignInForm(): JSX.Element {
  return (
    <form>
      <h1>Sign In</h1>
      <label htmlFor="email">
        Email:
        <input type="text" name="email" id="email" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" id="password" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SignInForm;
