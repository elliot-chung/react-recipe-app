import styled from "styled-components";

const StyledRecipeSidebar = styled.section`
  width: 100vw;
  height: auto;
  box-shadow: inset 0 -0.4rem 0.5rem -0.4rem rgba(0, 0, 0, 0.2);

  div {
    padding: 1rem;
  }

  img {
    width: 100%;
    height: auto;
  }

  // Sizes for different screen sizes
  ${({ theme }) => theme.mediaQueries.mobile} {
    width: 100vw;
    height: auto;
    box-shadow: inset 0 -0.4rem 0.5rem -0.4rem rgba(0, 0, 0, 0.4);
  }

  ${({ theme }) => theme.mediaQueries.tablet} {
    width: 100vw;
    height: auto;
    box-shadow: inset 0 -0.4rem 0.5rem -0.4rem rgba(0, 0, 0, 0.4);
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    box-shadow: 0 0 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
    width: 50vw;
    height: calc(100vh - ${({ theme }) => theme.componentSizes.navbarHeight});
    position: fixed;
  }

  ${({ theme }) => theme.mediaQueries.desktopL} {
    box-shadow: 0 0 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
    width: 40vw;
    height: calc(100vh - ${({ theme }) => theme.componentSizes.navbarHeight});
    position: fixed;
  }
`;

export default StyledRecipeSidebar;
