import styled from 'styled-components'
import { TABLET_WIDTH_MAX_PLUS_1 } from '../constants'

// Section 0
//
export const Section0 = styled.div`
  margin-top: 24px;
`

export const Section0Header = styled.h1`
  font-family: 'Noteworthy Light';
  color: black;
  font-size: 65px;
  transform: rotate(-3deg);
  display: flex;
  justify-content: center;
`

// Section 1
//
export const Section1 = styled.div`
  margin-top: 24px;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    display: flex;
    flex-direction: row-reverse;
  }
`

export const Section1Image = styled.img`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    width: 60%;
    object-fit: cover;
    margin: 16px;
    margin-top: 24px;
  }
`

// Pulled in custom Noteworthy Light font with this tutorial
// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni
export const Section1Header = styled.h1`
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

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    display: flex;
  }
`

export const Section2Image = styled.img`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    width: 60%;
    object-fit: cover;
    margin: 16px;
    margin-top: 24px;
  }
`

// Pulled in custom Noteworthy Light font with this tutorial
// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni
export const Section2Header = styled.h1`
  font-family: 'Noteworthy Light';
  color: black;
  font-size: 65px;
  transform: rotate(-3deg);
  display: flex;
  justify-content: center;
`
