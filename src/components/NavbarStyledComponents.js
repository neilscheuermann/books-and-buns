import styled from 'styled-components'
import { BORDER_COLOR, SECONDARY_COLOR } from '../constants'
import { SHADOW, TABLET_WIDTH_MAX_PLUS_1 } from '../constants'
import { MainText } from '../styles/SharedStyledComponents'

export const LogoText = styled.div`
  font-family: 'Noteworthy Light';
  color: white;
  font-weight: 800;
  font-size: 40px;
  display: flex;
  align-items: center;
  padding-bottom: 8px;
`

export const Amper = styled.div`
  font-size: 28px;
  margin: 0 6px;
  margin-top: 10px;
`

export const NavbarContentWrapper = styled.div`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    min-height: 3.25rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`

export const NavItemsWrapper = styled.div`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    display: flex;
  }
`

export const NavItemText = styled(MainText)`
  ${({ selected }) =>
    selected &&
    `
      font-size: 1.7em;
      font-weight: 900;

      ${/* Web */ ''}
      @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
        border-bottom: 2px solid ${BORDER_COLOR};
      }
    `}
`
