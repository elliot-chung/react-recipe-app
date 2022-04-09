import React, { useCallback, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginContext from "../contexts/LoginContext";
import StyledProfileMenu from "../styles/ProfileMenu.style";
import StyledThemeToggle from "../styles/ThemeToggle.style";

type ProfileMenuProps = {
  enableDarkMode: boolean;
  setEnableDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

function ProfileMenu({ enableDarkMode, setEnableDarkMode }: ProfileMenuProps) {
  const { isLoggedIn, user, logout } = useContext(LoginContext);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = useCallback(
    () => (isLoggedIn ? () => logout() : () => navigate("/login")),
    [isLoggedIn, logout, navigate]
  );

  return (
    <StyledProfileMenu
      tabIndex={0}
      role="button"
      onClick={() => setShowMenu(!showMenu)}
      onBlur={() => setShowMenu(false)}
    >
      <p>{isLoggedIn ? user.name : "Not Logged In"}</p>
      {showMenu && (
        <div
          role="menu"
          tabIndex={0}
          onMouseDown={event => {
            event.preventDefault();
            event.stopPropagation();
          }}
          onClick={() => setShowMenu(false)}
          onKeyDown={event => {
            if (event.key === "Escape") setShowMenu(false);
          }}
        >
          {isLoggedIn && (
            <Link to="/favorites">
              <div>
                <p>❤️</p>
                <p>My Favorites</p>
              </div>
            </Link>
          )}
          <div
            role="checkbox"
            tabIndex={0}
            aria-checked={enableDarkMode}
            onClick={() => setEnableDarkMode(prev => !prev)}
            onKeyDown={event => {
              if (event.key === "Enter") setEnableDarkMode(!enableDarkMode);
            }}
          >
            <StyledThemeToggle
              type="checkbox"
              defaultChecked={enableDarkMode}
            />
            <p>Toggle Dark Mode</p>
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={handleLogout()}
            onKeyDown={event => {
              if (event.key === "Enter") handleLogout();
            }}
          >
            <p>{isLoggedIn ? "Logout" : "Login"}</p>
          </div>
        </div>
      )}
    </StyledProfileMenu>
  );
}

export default ProfileMenu;
