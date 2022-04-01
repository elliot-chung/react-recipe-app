import styled from "styled-components";

const StyledRecipeCardContainer = styled.section`
  --background-color: ${({ theme }) => theme.colors.primaryBackground};
  --select-color: ${({ theme }) => theme.colors.glow};

  background-color: var(--background-color);
  display: grid;

  .selected {
    box-shadow: 0 0 0.35rem 0.35rem var(--select-color);
  }

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
