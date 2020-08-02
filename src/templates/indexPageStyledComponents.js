import styled from 'styled-components'
import {
  BACKGROUND_COLOR,
  COLOR_1,
  HEADER_HEIGHT_MOBILE,
  TABLET_WIDTH_MAX,
  TABLET_WIDTH_MAX_PLUS_1,
} from '../constants'

export const Img3 = styled.img`
  position: absolute;
  left: 5%;
  top: -200px;
  width: 30%;
  height: ${({ imgHeight }) => imgHeight};
  object-fit: cover;
`

export const MainImage = styled.div`
  background-image: url(${({ imgUrl }) => imgUrl});
  height: ${({ imgHeight }) => imgHeight};

  ${/* Web */ ''}
    @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    background-position: 50% 85%;
    background-attachment: fixed;
    background-size: cover;
  }

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    background-position: center center;
    background-size: cover;
    margin-top: 80px;
  }
`

export const SmallTextBox = styled.div`
  position: absolute;
  left: 5%;
  top: 120px;
  width: 25%;
  padding: 20px;
`

export const Section1 = styled.div`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    position: relative;
    height: ${({ divHeight }) => divHeight};
    margin-top: 100px;
  }
`

export const Section1TextBox = styled.div`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    position: absolute;
    width: 35%;
    z-index: 1;
    padding: 40px 20px 20px 20px;
  }
`

export const Section1Img = styled.img`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    position: absolute;
    left: 40%;
    width: 60%;
    height: ${({ imgHeight }) => imgHeight};
    object-fit: cover;
  }
`

// Pulled in custom Noteworthy Light font with this tutorial
// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni
export const Section1WelcomeText = styled.h1`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    font-family: 'Noteworthy Light';
    color: black;
    font-size: 65px;
    position: absolute;
    transform: rotate(-3deg);
    top: -76px;
    left: 102px;
    z-index: 2;
  }

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    font-family: 'Noteworthy Light';
    color: black;
    font-size: 45px;
    transform: rotate(-3deg);
    margin: 24px 0 8px;
  }
`

export const Section2 = styled.div`
  position: relative;
  height: 300px;
  margin-top: 20px;
`
