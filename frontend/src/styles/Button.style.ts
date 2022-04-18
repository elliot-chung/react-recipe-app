import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: white;
  box-shadow: inset 0 0 0.1rem 0.1rem rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 0.75rem;
  padding: 0.35rem 0.5rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  margin-left: 0.5rems;

  &:hover {
    background-color: ${({ theme }) => theme.colors.glow};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.tertiaryBackground};
    cursor: auto;
  }
`;

export default StyledButton;
