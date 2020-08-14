import styled from 'styled-components'
import {
  BORDER_COLOR,
  BACKGROUND_COLOR_LIGHT_BLUE,
  COLOR_ORANGE,
  TABLET_WIDTH_MAX,
  TABLET_WIDTH_MAX_PLUS_1,
} from '../constants'
import { MainText } from '../styles/SharedStyledComponents'

const BORDER_HEIGHT = '24px'

// Section 1
//
export const Section1 = styled.div`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    margin: 32px 0;
    display: flex;
  }
`

export const Section1TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    padding-left: 16px;
  }
`

export const Section1Header = styled.h1`
  font-family: 'Tw Cen Medium Regular';
  display: flex;
  justify-content: center;
  font-size: 2em;
  margin-top: 32px;
`

export const Section1Img = styled.img`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    width: 60%;
    object-fit: cover;
    margin: 16px;
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

// Section 2
//
export const Section2 = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    position: relative;
    flex-direction: row-reverse;
    margin: 16px;
  }
`

export const Section2TextContent = styled.div`
  background-color: white;

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    margin-top: 32px;
  }

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    border-top: ${BORDER_HEIGHT} solid ${BACKGROUND_COLOR_LIGHT_BLUE};
    width: 40%;
    margin-top: 120px;
    padding: ${40 - parseInt(BORDER_HEIGHT)}px 16px 40px;
  }
`

export const Section2Image = styled.img`
  object-fit: cover;
  width: 50%;

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    width: 80%;
    height: 300px;
  }

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    width: 45%;
    height: auto;
    margin: 16px;
    margin-left: 0;
    z-index: 1;
  }
`

// Section 3
//
export const Section3 = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    display: flex;
    margin: 16px;
    flex-direction: row;
  }
`

export const Section3Image = styled.img`
  object-fit: cover;

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    width: 80%;
    height: 300px;
  }

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    width: 45%;
    height: auto;
    margin: 16px;
    margin-right: 0;
  }
`

export const Section3TextContent = styled.div`
  background-color: white;

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    margin-top: 32px;
  }

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    border-bottom: ${BORDER_HEIGHT} solid ${BACKGROUND_COLOR_LIGHT_BLUE};
    width: 40%;
    margin-bottom: 24px;
    padding: 40px 16px ${40 - parseInt(BORDER_HEIGHT)}px;
  }
`
// padding: 40px 16px ${40 - parseInt(BORDER_HEIGHT)}px;
