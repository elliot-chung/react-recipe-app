import styled from "styled-components";

const StyledHomePage = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 1rem;

    ${({ theme }) => theme.mediaQueries.mobile} {
      margin: 1rem;
    }

    ${({ theme }) => theme.mediaQueries.tablet} {
      margin: 2rem;
    }

    ${({ theme }) => theme.mediaQueries.desktop} {
      margin: 3rem;
    }

    ${({ theme }) => theme.mediaQueries.desktopL} {
      margin: 4rem;
    }
  }
`;

export default StyledHomePage;
