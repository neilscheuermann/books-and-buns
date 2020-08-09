import styled from 'styled-components'
import {
  COLOR_ORANGE,
  TABLET_WIDTH_MAX,
  TABLET_WIDTH_MAX_PLUS_1,
} from '../constants'
import { MainText } from '../styles/SharedStyledComponents'

// Section 1
//
export const Section1 = styled.div`
  background-color: white;
  margin-top: 68px;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    margin: 108px 0;
    display: flex;
  }
`

export const Section1TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`

export const Section1Header = styled(MainText)`
  color: white;
  background-color: ${COLOR_ORANGE};
  position: absolute;
  top: -50px;
  left: 19%;
  font-size: 45px;
  padding: 0 16px;

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    top: -67px;
    left: 3%;
  }
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
