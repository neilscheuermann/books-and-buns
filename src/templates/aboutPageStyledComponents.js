import styled from 'styled-components'
import {
  BORDER_COLOR,
  COLOR_ORANGE,
  TABLET_WIDTH_MAX,
  TABLET_WIDTH_MAX_PLUS_1,
} from '../constants'
import { MainText } from '../styles/SharedStyledComponents'

// Section 0
//
export const Section0 = styled.div`
  position: relative;
`

export const Section0MainText = styled(MainText)`
  position: absolute;
  width: 30%;
  background-color: ${BORDER_COLOR};
  padding: 8px;
`

// Section 1
//
export const Section1 = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    position: relative;
    flex-direction: row-reverse;
    margin-top: 88px;
    margin-bottom: 0;
  }
`

export const Section1TextContent = styled.div`
  background-color: white;
  border-top: 10px solid ${COLOR_ORANGE};

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    margin-top: 32px;
  }

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    width: 40%;
    margin-top: 120px;
    padding: 40px 16px;
  }
`

export const Section1Image = styled.img`
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
    margin-top: 24px;
    margin-left: 0;
    z-index: 1;
  }
`

// Section 2
//
export const Section2 = styled.div`
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
    margin-top: 0;
    margin-bottom: 32px;
    flex-direction: row;
  }
`

export const Section2Image = styled.img`
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
    margin-top: 24px;
    margin-right: 0;
  }
`

export const Section2TextContent = styled.div`
  background-color: white;
  border-bottom: 10px solid ${COLOR_ORANGE};

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    margin-top: 32px;
  }

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    width: 40%;
    margin-bottom: 24px;
    padding: 40px 16px;
  }
`
