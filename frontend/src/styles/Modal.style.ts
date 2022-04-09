import styled from "styled-components";

const StyledModal = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border-radius: 1rem;
  width: 80%; /* Could be more or less, depending on screen size */
  height: auto;
`;

export default StyledModal;
