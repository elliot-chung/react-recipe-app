import styled from "styled-components";

const StyledFavoritePage = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 1rem;

  ${({ theme }) => theme.mediaQueries.mobile} {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  ${({ theme }) => theme.mediaQueries.tablet} {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  ${({ theme }) => theme.mediaQueries.desktopL} {
    margin-left: 4rem;
    margin-right: 4rem;
  }
`;

export default StyledFavoritePage;
