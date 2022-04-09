import styled from "styled-components";

const SearchbarStyle = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border-radius: 1rem;
  padding: 0.5rem;

  input {
    border: none;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    color: ${({ theme }) => theme.colors.primaryInk};
    font-size: 1.5rem;
    &::placeholder {
      color: ${({ theme }) => theme.colors.primaryInk};
    }
  }
`;

export default SearchbarStyle;
