import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../contexts/LoginContext";
import Searchbar from "./Searchbar";

function Navbar(): JSX.Element {
  const userStates = useContext(LoginContext);
  const { isLoggedIn, logout } = userStates;
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Searchbar />
      <Link to="/favorites"> Favorites </Link>
      {isLoggedIn ? (
        <button type="button" onClick={logout}>
          Logout
        </button>
      ) : (
        <Link to="/login"> Login </Link>
      )}
    </nav>
  );
}

export default Navbar;
