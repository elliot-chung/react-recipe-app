import styled from "styled-components";

interface StyledFavoriteOptionProps {
  newList: boolean;
}

const StyledFavoriteOption = styled.div<StyledFavoriteOptionProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  box-shadow: 0rem 0rem 0.2rem 0rem rgba(0, 0, 0, 0.75);
  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.newList
        ? ({ theme }) => theme.colors.red
        : ({ theme }) => theme.colors.highlight};
  }
`;

export default StyledFavoriteOption;
