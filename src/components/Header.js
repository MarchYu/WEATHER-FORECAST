import styled from "styled-components";
import logo from "../icons/logo.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="myForecast"> Current weather</div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  height: 10vh;
  background: #1c3144;
  display: flex;
  align-items: center;
  .logo {
    margin-left: 2vw;
  }
  .myForecast {
    color: white;
    font-family: Okta;
    font-size: 1.4rem;
    margin-left: 10px;
  }
`;
