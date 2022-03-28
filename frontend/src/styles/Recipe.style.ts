import styled from "styled-components";

const StyledRecipePage = styled.main`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.mobile} {
    flex-direction: column;
  }

  ${({ theme }) => theme.mediaQueries.tablet} {
    flex-direction: row;
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    flex-direction: row;
  }

  ${({ theme }) => theme.mediaQueries.desktopL} {
    flex-direction: row;
  }
`;
export default StyledRecipePage;
