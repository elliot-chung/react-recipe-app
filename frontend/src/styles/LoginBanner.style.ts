import styled from "styled-components";

const StyledLoginBanner = styled.div`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: auto;

  a {
    width: 100%;
  }
  button {
    width: 100%;
    font-size: 2rem;
  }
`;

export default StyledLoginBanner;
