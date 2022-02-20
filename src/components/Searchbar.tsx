import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Searchbar(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (inputRef.current) {
      navigate(`/search/${inputRef.current.value}`);
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  // Add a keypress listener to the input element
  // When the user presses enter, call handleSubmit
  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} onKeyPress={handleKeyPress} />
      <button type="submit">Search</button>
    </form>
  );
}

export default Searchbar;
