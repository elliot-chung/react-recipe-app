import styled from "styled-components";

const StyledFavoriteListViewer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 2.5rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.primaryInk};
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
  }
`;

export default StyledFavoriteListViewer;
