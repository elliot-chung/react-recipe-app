import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryInk};
  box-shadow: 0 4px 4px rgba(0 0 0 / 25%);
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.sharedValues.navbarHeight};
  transition: all 0.2s ease;
  box-sizing: border-box;
  overflow: hidden;
`;

export default StyledNavbar;
