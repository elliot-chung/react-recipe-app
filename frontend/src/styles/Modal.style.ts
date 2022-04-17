import styled from "styled-components";

const StyledModal = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  margin-top: 10rem;
  margin-bottom: 10rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0.75rem;
  border-radius: 1rem;
  width: 80%;
`;

export default StyledModal;
