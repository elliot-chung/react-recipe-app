import styled from "styled-components";

const StyledRecipeSidebar = styled.section`
  width: 100vw;
  height: auto;
  box-shadow: inset 0 -0.4rem 0.5rem -0.4rem rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: auto;
  }

  // Sizes for different screen sizes
  ${({ theme }) => theme.mediaQueries.mobile} {
    width: 100vw;
    height: auto;
    box-shadow: inset 0 -0.4rem 0.5rem -0.4rem rgba(0, 0, 0, 0.2);
  }

  ${({ theme }) => theme.mediaQueries.tablet} {
    width: 100vw;
    height: auto;
    box-shadow: inset 0 -0.4rem 0.5rem -0.4rem rgba(0, 0, 0, 0.2);
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    div {
      padding-left: 1rem;
      padding-right: 2rem;
    }
    box-shadow: 0 0 0.4rem 0.4rem rgba(0, 0, 0, 0.2);
    width: 50vw;
    height: calc(100vh - ${({ theme }) => theme.componentSizes.navbarHeight});
  }

  ${({ theme }) => theme.mediaQueries.desktopL} {
    div {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    box-shadow: 0 0 0.4rem 0.4rem rgba(0, 0, 0, 0.2);
    width: 40vw;
    height: calc(100vh - ${({ theme }) => theme.componentSizes.navbarHeight});
  }
`;

export default StyledRecipeSidebar;
