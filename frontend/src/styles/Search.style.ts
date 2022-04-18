import styled from "styled-components";

const StyledSearchPage = styled.main`
  padding: 0.5rem;

  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: 0.5rem;
  }

  ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 1rem;
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 2rem;
  }

  ${({ theme }) => theme.mediaQueries.desktopL} {
    padding: 3rem;
  }
`;

export default StyledSearchPage;
