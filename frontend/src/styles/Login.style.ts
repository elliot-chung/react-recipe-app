import styled from "styled-components";

const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: column;

  width: 80%;
  margin: ${({ theme }) => theme.componentSizes.navbarHeight} auto;

  padding-top: 1rem;
`;

export default StyledLoginPage;
