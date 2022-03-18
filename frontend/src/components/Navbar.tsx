import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../contexts/LoginContext";
import StyledNavbar from "../styles/Navbar.style";
import Searchbar from "./Searchbar";

function Navbar(): JSX.Element {
  const userStates = useContext(LoginContext);
  const { user, isLoggedIn, logout } = userStates;
  return (
    <StyledNavbar>
      <Link to="/"> Home </Link>
      <Searchbar />
      {isLoggedIn && user.name}
      <Link to="/favorites"> Favorites </Link>
      {isLoggedIn ? (
        <button type="button" onClick={logout}>
          Logout
        </button>
      ) : (
        <Link to="/login"> Login </Link>
      )}
    </StyledNavbar>
  );
}

export default Navbar;
