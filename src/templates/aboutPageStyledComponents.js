import styled from 'styled-components'
import { BACKGROUND_COLOR, COLOR_1 } from '../constants'

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
  color: black;
  font-size: 65px;
  transform: rotate(-3deg);
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
