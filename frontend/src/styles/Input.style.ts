import styled from "styled-components";

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  color: ${({ theme }) => theme.colors.primaryInk};
  border: none;
  border-radius: 0.75rem;
  padding: 0.35rem 0.5rem;
  box-shadow: inset 0 0 0.15rem 0.15rem rgba(0, 0, 0, 0.3);
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryInk};
  }
`;

export default StyledInput;
