import styled from "styled-components";

const StyledRecipeCard = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0 0 0 / 25%);
  background: ${({ theme }) => theme.colors.secondaryBackground};
  flex-shrink: 0;
  margin: 10px;
  position: relative;
  transition: all 0.2s ease;
  width: 300px;
  height: 300px;

  &:hover {
    box-shadow: 0 8px 8px rgba(0 0 0 / 25%);
    transform: scale(1.02);
  }

  img {
    border-radius: 10px 10px 0 0;
    object-fit: cover;
    object-position: center;
    max-height: 70%;
    width: 100%;
  }

  div {
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    border-radius: 0 0 10px 10px;
    bottom: 0;
    height: 30%;
    padding: 10px 20px;
    position: absolute;
    width: calc(100% - 40px);

    h5 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    a,
    p {
      font-size: 0.8em;
    }
  }
`;

export default StyledRecipeCard;
