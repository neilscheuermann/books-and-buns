import styled from 'styled-components'
import { TABLET_WIDTH_MAX_PLUS_1 } from '../constants'

// Section 1
//
export const Section1 = styled.div`
  margin-top: 24px;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    display: flex;
  }
`

export const Section1TextBox = styled.div`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
  }
`
export const Section1TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Section1Img = styled.img`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    width: 60%;
    object-fit: cover;
    margin: 16px;
    margin-top: 24px;
  }
`

export const Section1WelcomeText = styled.h1`
  font-family: 'Noteworthy Light';
  color: black;
  font-size: 65px;
  transform: rotate(-3deg);
  display: flex;
  justify-content: center;
`

// Section ...
//
export const EmailWrapper = styled.div`
  margin: 80px 0 40px;
  display: flex;
  justify-content: center;
`

export const Img3 = styled.img`
  position: absolute;
  left: 5%;
  top: -200px;
  width: 30%;
  height: ${({ imgHeight }) => imgHeight};
  object-fit: cover;
`
