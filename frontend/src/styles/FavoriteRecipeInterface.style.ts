import styled from "styled-components";

const StyledFavoriteRecipeInterface = styled.div`
  --main-color: ${({ theme }) => theme.colors.primaryBackground};
  --loading-color: ${({ theme }) => theme.colors.tertiaryBackground};
  --highlight-color: ${({ theme }) => theme.colors.highlight};
  --select-color: ${({ theme }) => theme.colors.glow};
  --text-color: ${({ theme }) => theme.colors.secondaryInk};
  --text-color-highlight: ${({ theme }) => theme.colors.primaryInk};

  margin: 2rem;
  padding: 1rem;
  border-radius: 0.2rem;
  box-shadow: inset 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  overflow: auto;
`;

export default StyledFavoriteRecipeInterface;
