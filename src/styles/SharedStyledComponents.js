import styled from 'styled-components'
import { TABLET_WIDTH_MAX, TABLET_WIDTH_MAX_PLUS_1 } from '../constants'

// Pulled in custom Tw Cen Medium Regular font with this tutorial
// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni
export const MainText = styled.p`
  font-family: 'Tw Cen Medium Regular';
  line-height: 1.5;
  font-size: 1.5em;
  margin: 16px;
`

export const Button = styled.button`
  font-family: 'Tw Cen Medium Regular';
  line-height: 1.5;
  font-size: 1.5em;
`

export const HeaderImage = styled.div`
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
    background-position: 45% center;
    background-size: 190%;
    margin-top: 90px;
  }
`
