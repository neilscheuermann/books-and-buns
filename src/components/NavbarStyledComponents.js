import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {
  BORDER_COLOR,
  TABLET_WIDTH_MAX,
  TABLET_WIDTH_MAX_PLUS_1,
  SECONDARY_COLOR,
} from '../constants'
import { MainText } from '../styles/SharedStyledComponents'

export const LogoText = styled.div`
  color: white;
  font-weight: 800;
  font-size: 40px;
  display: flex;
  align-items: center;

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    font-size: 30px;
  }
`

export const Amper = styled.div`
  font-size: 28px;
  margin: 0 6px;
`

export const NavbarContentWrapper = styled.div`
  height: inherit;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    min-height: 3.25rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`
export const NavbarBrandStyled = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
`

export const NavItemsWrapper = styled.div`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    display: flex;
  }
`

export const StyledLink = styled((props) => <Link {...props} />)`
  color: white;
  margin: 0 8px;
`

export const NavMenu = styled.div`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    display: flex;
    justify-content: flex-end;
  }

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    background-color: ${BORDER_COLOR};
  }
`

export const NavItemText = styled(MainText)`
  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    margin: 6px;
  }

  ${StyledLink}:hover {
    color: black;
  }

  ${({ selected }) =>
    selected &&
    `
      font-size: 1.7em;
      font-weight: 900;
      display: inline-block;
      border-bottom: 2px solid white;

      ${/* Web */ ''}
      @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
        border-bottom: 2px solid ${BORDER_COLOR};
      }
    `}
`
