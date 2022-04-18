import styled from "styled-components";

const StyledRecipeContentContainer = styled.article`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  display: flex;
  flex-direction: column;
  position: relative;

  ${({ theme }) => theme.mediaQueries.mobile} {
  }

  ${({ theme }) => theme.mediaQueries.tablet} {
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    background-color: transparent;
    width: 50%;
    left: 50vw;
  }

  ${({ theme }) => theme.mediaQueries.desktopL} {
    background-color: transparent;
    width: 60%;
    left: 40vw;
  }
`;

export default StyledRecipeContentContainer;
