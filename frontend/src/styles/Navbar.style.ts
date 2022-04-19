import styled from "styled-components";

const StyledNavbar = styled.nav`
  --navbar-height: ${({ theme }) => theme.componentSizes.navbarHeight};
  --navbar-padding: calc(var(--navbar-height) / 5);
  --navbar-color: ${({ theme }) => theme.colors.secondaryBackground};
  --home-filter: ${({ theme }) => theme.filters.home};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--navbar-color);
  padding: var(--navbar-padding);
  box-shadow: 0 4px 4px rgba(0 0 0 / 25%);
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--navbar-height);
  transition: all 0.2s ease;
  box-sizing: border-box;

  a {
    display: flex;
    align-items: center;
  }
  a img {
    filter: var(--home-filter);
    height: calc(var(--navbar-height) / 1.2);

    ${({ theme }) => theme.mediaQueries.mobile} {
      height: calc(var(--navbar-height) / 1.2);
    }

    ${({ theme }) => theme.mediaQueries.tablet} {
      height: calc(var(--navbar-height) / 1.1);
    }

    ${({ theme }) => theme.mediaQueries.desktop} {
      height: calc(var(--navbar-height) / 1.05);
    }

    ${({ theme }) => theme.mediaQueries.desktopL} {
      height: var(--navbar-height);
    }
  }
`;

export default StyledNavbar;
