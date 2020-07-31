import styled from 'styled-components'
import { COLOR_1 } from '../constants'

export const MainImage = styled.div`
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: top left;
  background-attachment: fixed;
  background-size: cover;
  height: 600px;
`

export const TextBox = styled.div`
  position: absolute;
  width: 50%;
  z-index: 1;
  background-color: white;
  padding: 40px 20px 20px 20px;
`

export const WelcomeText = styled.h1`
  background-color: ${COLOR_1};
  color: white;
  line-height: 2;
  font-size: 30px;
  position: absolute;
  top: -16px;
  left: 10px;
  z-index: 2;
`

export const Img = styled.img`
  position: absolute;
  left: 40%;
  width: 60%;
  height: ${({ imgHeight }) => imgHeight};
  objectfit: cover;
`

export const SmallTextBox = styled.div`
  position: absolute;
  left: 5%;
  width: 25%;
  padding: 20px;
`

export const EmailTreat = styled.div`
  position: absolute;
  left: 55%;
  top: 20px;
  width: 25%;
  padding: 20px;
`
