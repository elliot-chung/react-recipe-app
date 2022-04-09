import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/icons/home.svg";
import StyledNavbar from "../styles/Navbar.style";
import ProfileMenu from "./ProfileMenu";
import Searchbar from "./Searchbar";

interface NavbarProps {
  enableDarkMode: boolean;
  setEnableDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({
  enableDarkMode,
  setEnableDarkMode,
}: NavbarProps): JSX.Element {
  return (
    <StyledNavbar>
      <Link to="/">
        <img src={home} alt="home" />
      </Link>
      <Searchbar />
      <ProfileMenu
        enableDarkMode={enableDarkMode}
        setEnableDarkMode={setEnableDarkMode}
      />
    </StyledNavbar>
  );
}

export default Navbar;
