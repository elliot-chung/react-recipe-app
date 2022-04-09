import styled from "styled-components";

const StyledFavoriteRecipeInterface = styled.div`
  --main-color: ${({ theme }) => theme.colors.secondaryBackground};
  --loading-color: ${({ theme }) => theme.colors.tertiaryBackground};
  --highlight-color: ${({ theme }) => theme.colors.highlight};
  --select-color: ${({ theme }) => theme.colors.glow};
  --text-color: ${({ theme }) => theme.colors.secondaryInk};
  --text-color-highlight: ${({ theme }) => theme.colors.primaryInk};
`;

export default StyledFavoriteRecipeInterface;
