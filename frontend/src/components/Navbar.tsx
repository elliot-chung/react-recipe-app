import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

function Navbar(): JSX.Element {
  const user = null;
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Searchbar />
      <Link to="/favorites"> Favorites </Link>
      {user ? (
        <Link to="/login"> Logout </Link>
      ) : (
        <Link to="/login"> Login </Link>
      )}
    </nav>
  );
}

export default Navbar;
