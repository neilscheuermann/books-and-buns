import styled from 'styled-components'
import { SECONDARY_COLOR } from '../constants'
import { SHADOW, TABLET_WIDTH_MAX_PLUS_1 } from '../constants'
import { MainText } from '../styles/SharedStyledComponents'

export const LogoText = styled.div`
  font-family: 'Noteworthy Light';
  color: black;
  font-size: 30px;
  text-shadow: ${SHADOW};
  display: flex;
  align-items: center;
`

export const Amper = styled.div`
  font-size: 25px;
  margin: 0 4px;
`

export const NavItemText = styled(MainText)`
  ${({ selected }) =>
    selected &&
    `
      font-size: 1.7em;
      font-weight: 900;

      ${/* Web */ ''}
      @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
        border-bottom: 2px solid black;
      }
    `}
`
