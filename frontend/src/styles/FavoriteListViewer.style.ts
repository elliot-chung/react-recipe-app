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
  box-shadow: 0 0 0.15rem 0.15rem rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: row;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
  }
`;

export default StyledFavoriteListViewer;
