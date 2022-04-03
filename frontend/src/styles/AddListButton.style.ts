import styled from "styled-components";

const StyledAddListButton = styled.button`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  height: 2.5rem;
  border: none;
  border-radius: 0.5rem;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.primaryBackground} 20%,
    ${({ theme }) => theme.colors.glow} 100%
  );
  cursor: pointer;

  h5 {
    color: darkgrey;
  }

  &:hover {
    background-image: linear-gradient(
      ${({ theme }) => theme.colors.primaryBackground} 0%,
      ${({ theme }) => theme.colors.glow} 100%
    );
  }

  &:active {
    background-image: linear-gradient(
      ${({ theme }) => theme.colors.glow} 100%,
      ${({ theme }) => theme.colors.glow} 100%
    );
  }
`;

export default StyledAddListButton;
