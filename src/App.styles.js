import styled from "styled-components";
import { device } from "./device";

const { mobileS, mobileL, tablet, laptop, laptopL, desktopL } = device;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: red;

  @media ${mobileS} {
    width: 100%;
    background: orange;
  }

  @media ${mobileL} {
    width: 95%;
    background: green;
  }
  
  @media ${tablet} {
    width: 90%;
    background: blue;
  }

  @media ${laptop} {
    width: 85%;
    background: cyan;
  }

  @media ${laptopL} {
    width: 80%;
    background: pink;
  }

  @media ${desktopL} {
    width: 75%;
    background: purple;
  }
`;

export {
  AppWrapper,
  Container
}