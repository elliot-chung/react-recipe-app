import styled from "styled-components";

const StyledRecipeInstructions = styled.section`
  ol {
    padding-left: 1rem;
  }

  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: 0;
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

export default StyledRecipeInstructions;
