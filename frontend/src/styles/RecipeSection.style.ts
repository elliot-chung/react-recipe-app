import styled from "styled-components";

const StyledRecipeSection = styled.section`
  padding: 1rem;
  ul,
  ol {
    padding-left: 1rem;
  }

  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: 1rem;
  }

  ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 2rem;
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 2rem;
  }

  ${({ theme }) => theme.mediaQueries.desktopL} {
    padding: 4rem;
  }
`;

export default StyledRecipeSection;
