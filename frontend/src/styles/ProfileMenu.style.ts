import styled from "styled-components";

const StyledProfileMenu = styled.div`
  cursor: pointer;
  p {
    color: white;
  }
  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 0.5rem;
    padding: 1rem;
    right: 0;
    width: 12rem;
    height: auto;
    background-color: ${({ theme }) => theme.colors.highlight};
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);

    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      box-shadow: none;
      padding: 0.5rem 0.35rem;
      position: relative;
      width: auto;
      height: 1.5 rem;

      &:hover {
        background-color: ${({ theme }) => theme.colors.tertiaryBackground};
      }

      p {
        color: ${({ theme }) => theme.colors.primaryInk};
        padding: 0.1rem 0.5rem;
      }
    }
  }
`;

export default StyledProfileMenu;
