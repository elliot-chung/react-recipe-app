import styled from "styled-components";

const StyledRecipePage = styled.main`
  display: flex;
  flex-direction: column;

  article {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.mobile} {
    flex-direction: column;
  }

  ${({ theme }) => theme.mediaQueries.tablet} {
    flex-direction: column;
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    flex-direction: row;
  }

  ${({ theme }) => theme.mediaQueries.desktopL} {
    flex-direction: row;
  }
`;
export default StyledRecipePage;
