import styled from "styled-components";

const SearchbarStyle = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 0.5rem;
  height: 1.8rem;
  width: 50%;

  ${({ theme }) => theme.mediaQueries.mobile} {
    width: 50%;
  }

  ${({ theme }) => theme.mediaQueries.tablet} {
    width: 45%;
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    width: 35%;
  }

  ${({ theme }) => theme.mediaQueries.desktopL} {
    width: 25%;
  }

  input {
    border: none;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    color: ${({ theme }) => theme.colors.primaryInk};
    font-size: 1.2rem;
    width: 100%;
    &::placeholder {
      color: ${({ theme }) => theme.colors.primaryInk};
    }
  }
`;

export default SearchbarStyle;
