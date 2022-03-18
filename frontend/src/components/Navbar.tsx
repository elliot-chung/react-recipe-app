import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../contexts/LoginContext";
import StyledNavbar from "../styles/Navbar.style";
import Searchbar from "./Searchbar";

interface NavbarProps {
  setEnableDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ setEnableDarkMode }: NavbarProps): JSX.Element {
  const userStates = useContext(LoginContext);
  const { user, isLoggedIn, logout } = userStates;
  const handleClick = useCallback(
    () => setEnableDarkMode(prev => !prev),
    [setEnableDarkMode]
  );

  return (
    <StyledNavbar>
      <Link to="/"> Home </Link>
      <button type="button" onClick={handleClick}>
        Toggle Theme
      </button>
      <Searchbar />
      {isLoggedIn && <Link to="/favorites"> {user.name} </Link>}
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
