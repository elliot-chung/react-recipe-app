import styled from "styled-components";

const StyledFavoriteModal = styled.aside`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  div {
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.colors.primaryInk};
    width: 80%; /* Could be more or less, depending on screen size */
  }
`;

export default StyledFavoriteModal;
