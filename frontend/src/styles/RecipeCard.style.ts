import styled from "styled-components";

const StyledRecipeCard = styled.div`
  --main-color: ${({ theme }) => theme.colors.secondaryBackground};
  --loading-color: ${({ theme }) => theme.colors.tertiaryBackground};
  --highlight-color: ${({ theme }) => theme.colors.highlight};
  --select-color: ${({ theme }) => theme.colors.glow};
  --text-color: ${({ theme }) => theme.colors.secondaryInk};
  --text-color-highlight: ${({ theme }) => theme.colors.primaryInk};
  --card-size: ${({ theme }) => theme.componentSizes.recipeCardSize};
  --card-margin: calc(var(--card-size) / 30);
  --card-radius: calc(var(--card-size) / 30);
  --small-shadow-size: calc(var(--card-size) / 80);
  --large-shadow-size: calc(var(--card-size) / 40);

  border-radius: var(--card-radius);
  box-shadow: 0 var(--small-shadow-size) var(--small-shadow-size)
    rgba(0 0 0 / 25%);
  background: var(--loading-color);
  flex-shrink: 0;
  margin: var(--card-margin);
  position: relative;
  transition: all 0.2s ease;
  width: var(--card-size);
  height: var(--card-size);
  cursor: pointer;

  &:hover {
    box-shadow: 0 var(--large-shadow-size) var(--large-shadow-size)
      rgba(0 0 0 / 25%);
    transform: scale(1.02);

    div {
      background-color: var(--highlight-color);

      h5,
      p {
        color: var(--text-color-highlight);
      }
    }
  }

  img {
    border-radius: var(--card-radius) var(--card-radius) 0 0;
    object-fit: cover;
    object-position: center;
    max-height: 80%;
    width: 100%;
  }

  div {
    background-color: var(--main-color);
    border-radius: 0 0 var(--card-radius) var(--card-radius);
    bottom: 0;
    height: 20%;
    padding: 3% 5%;
    position: absolute;
    width: 90%;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;

    h5 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      color: white;
    }

    h5:only-child {
      overflow: visible;
      white-space: normal;
      padding-top: 3%;
    }

    p {
      font-size: 12px;
      color: white;
    }
  }
`;

export default StyledRecipeCard;
