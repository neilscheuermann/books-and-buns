import styled from 'styled-components'
import { TABLET_WIDTH_MAX, TABLET_WIDTH_MAX_PLUS_1 } from '../constants'
import { MainText } from '../styles/SharedStyledComponents'

// Section 0
//
export const Section0 = styled.div`
  padding-top: 24px;
`

export const Section0Header = styled.h1`
  font-family: 'Noteworthy Light';
  color: black;
  font-size: 65px;
  display: flex;
  justify-content: center;
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
    width: 80%;
    flex-direction: row-reverse;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`

export const Section1TextContent = styled.div`
  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    margin-top: 32px;
  }

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    width: 50%;
  }
`

export const Section1Image = styled.img`
  object-fit: cover;
  width: 50%;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    width: 50%;
    height: auto;
    margin: 16px;
    margin-top: 24px;
    z-index: 1;
  }
`

// Pulled in custom Noteworthy Light font with this tutorial
// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni
export const Section1Header = styled(MainText)`
  font-size: 65px;
  display: flex;
  justify-content: center;
`

// Section 2
//
export const Section2 = styled.div`
  margin-top: 24px;

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    width: 80%;
    display: flex;
    margin-top: 32px;
    margin-bottom: 32px;
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
    width: 50%;
    height: auto;
    margin: 16px;
    margin-top: 24px;
  }
`

export const Section2TextContent = styled.div`
  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    margin-top: 32px;
  }

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    width: 50%;
  }
`

// Pulled in custom Noteworthy Light font with this tutorial
// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni
export const Section2Header = styled(MainText)`
  font-size: 65px;
  display: flex;
  justify-content: center;
`
