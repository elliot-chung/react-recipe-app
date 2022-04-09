import React, { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SearchbarStyle from "../styles/Searchbar.style";
import StyledButton from "../styles/Button.style";

function Searchbar(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent): void => {
      e.preventDefault();
      if (inputRef.current && inputRef.current.value) {
        navigate(`/search?query=${encodeURIComponent(inputRef.current.value)}`);
      }
    },
    [navigate]
  );

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === "Enter") {
        handleSubmit(e);
      }
    },
    [handleSubmit]
  );

  // Add a keypress listener to the input element
  // When the user presses enter, call handleSubmit
  return (
    <SearchbarStyle onSubmit={handleSubmit}>
      <input ref={inputRef} onKeyPress={handleKeyPress} />
      <StyledButton type="submit">Search</StyledButton>
    </SearchbarStyle>
  );
}

export default Searchbar;
