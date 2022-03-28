import styled from "styled-components";

const StyledRecipeCardContainer = styled.section`
  --background-color: ${({ theme }) => theme.colors.primaryBackground};

  background-color: var(--background-color);
  display: grid;

  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  ${({ theme }) => theme.mediaQueries.desktopL} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  } ;
`;

export default StyledRecipeCardContainer;
