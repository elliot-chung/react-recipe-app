import styled from "styled-components";

const StyledThemeToggle = styled.input`
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  /* Not removed via appearance */
  margin: 0;

  font: inherit;
  color: ${({ theme }) => theme.colors.primaryInk};
  width: 1.15rem;
  height: 1.15rem;
  border: 0.15rem solid ${({ theme }) => theme.colors.primaryInk}r;
  border-radius: 0.15rem;
  transform: translateY(-0.075rem);

  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 0.65rem;
    height: 0.65rem;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1rem 1rem 0.5rem rgba(0, 0, 0, 0.25);
  }

  &::before {
    content: "";
    width: 0.65rem;
    height: 0.65rem;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1rem 1rem var(--form-control-color);
    /* Windows High Contrast Mode */
    background-color: CanvasText;
  }

  &:checked::before {
    transform: scale(1);
  }

  &:focus {
    outline: max(2px, 0.15rem) solid currentColor;
    outline-offset: max(2px, 0.15rem);
  }

  &:disabled {
    --form-control-color: var(--form-control-disabled);

    color: var(--form-control-disabled);
    cursor: not-allowed;
  }
`;

export default StyledThemeToggle;
