import styled from 'styled-components'
import { SECONDARY_COLOR, BACKGROUND_COLOR, COLOR_1 } from '../constants'

export const MainImage = styled.div`
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: 50% 85%;
  background-attachment: fixed;
  background-size: cover;
  height: 600px;
`

export const TextBox = styled.div`
  position: absolute;
  width: 35%;
  z-index: 1;
  padding: 40px 20px 20px 20px;
`

// Pulled in custom Noteworthy Light font with this tutorial
// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni
export const WelcomeText = styled.h1`
  font-family: 'Noteworthy Light';
  color: white;
  font-size: 75px;
  position: absolute;
  text-shadow: 2px 2px 3px gray;
  transform: rotate(-3deg);
  top: -176px;
  left: 10px;
  z-index: 2;
`

export const Img2 = styled.img`
  position: absolute;
  left: 40%;
  width: 60%;
  height: ${({ imgHeight }) => imgHeight};
  object-fit: cover;
`

export const Img3 = styled.img`
  position: absolute;
  left: 5%;
  top: -200px;
  width: 30%;
  height: ${({ imgHeight }) => imgHeight};
  object-fit: cover;
`

export const SmallTextBox = styled.div`
  position: absolute;
  left: 5%;
  top: 120px;
  width: 25%;
  padding: 20px;
`

export const EmailTreat = styled.div`
  position: absolute;
  left: 55%;
  top: 20px;
  width: 25%;
  padding: 20px;
  background-color: ${SECONDARY_COLOR};
`
